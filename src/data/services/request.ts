// utilise le fetch polyfill d'Expo (web + RN)
import { fetch as expoFetch } from 'expo/fetch';
import { FetchRequestType, FetchResponseType } from '@utils/types';

const normBase  = (s: string) => (s?.endsWith('/') ? s : s + '/');
const normRoute = (r: string) => (r?.startsWith('/') ? r.slice(1) : r);

export const fetchRequest = async ({
  route,
  method,
  useAccessToken = false,
  data,
  onChunk,
}: FetchRequestType): Promise<FetchResponseType> => {
  const rawBase = process.env.EXPO_PUBLIC_BASE_URL!;
  const baseUrl = normBase(rawBase);
  const url = `${baseUrl}${normRoute(route)}`;
  console.log('[HTTP]', method, url); // (garde ce log le temps du debug)
  try { new URL(url); } catch (e) {
    console.error('❌ Invalid URL:', url);
    throw e;
  }

  const isFormData =
    typeof FormData !== 'undefined' && data instanceof FormData;

  // headers de base (ne pas forcer Content-Type pour FormData)
  const baseHeaders: Record<string, string> = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
  };

  // effectue la requête
  const doFetch = async (retryCount = 0) => {
    let token = null;

    const headers: Record<string, string> = {
      ...baseHeaders,
      ...(useAccessToken && token ? { Authorization: `Bearer ${token}` } : {}),
    };

    const response = await expoFetch(url, {
      method,
      headers,
      body:
        method !== 'GET'
          ? isFormData
            ? (data as any)
            : JSON.stringify(data ?? {})
          : undefined,
    });

    return response;
  };

  // Exécuter la requête
  let response = await doFetch();

  // ------ Mode flux (ndjson / event-stream) ------
  const ct = (response.headers.get('content-type') || '').toLowerCase();
  const looksStream = /ndjson|event-stream/.test(ct);
  const canStream =
    !!onChunk &&
    !!response.body &&
    typeof (response.body as any).getReader === 'function';
  const isStream = looksStream && canStream;

  if (isStream) {
    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      let errParsed: unknown = errText;
      try { errParsed = errText ? JSON.parse(errText) : null; } catch {}
      return { code: response.status, data: errParsed };
    }

    const reader = (response.body as ReadableStream).getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      let eol: number;
      while ((eol = buffer.indexOf('\n')) !== -1) {
        const line = buffer.slice(0, eol).trim();
        buffer = buffer.slice(eol + 1);
        if (!line) continue;
        try {
          onChunk!(JSON.parse(line));
        } catch {
          // ignore ligne mal formée
        }
      }
    }

    // s'il reste un fragment final
    const rest = buffer.trim();
    if (rest) {
      try { onChunk!(JSON.parse(rest)); } catch {}
    }

    return { code: 200, data: null };
  }

  // ------ Réponse JSON/classique ------
  // parse erreur aussi en JSON si possible
  if (!response.ok) {
    const errText = await response.text().catch(() => '');
    let errParsed: unknown = errText;
    try { errParsed = errText ? JSON.parse(errText) : null; } catch {}
    return { code: response.status, data: errParsed };
  }

  const text = await response.text();
  let parsed: unknown;
  try { parsed = text ? JSON.parse(text) : null; } catch { parsed = text; }

  return { code: 200, data: parsed };
};
