export const formatTextMaxChars = (text: string, maxChars: number)=> {
  if (text.length > maxChars) {
    return text.slice(0, maxChars) + "...";
  }
  return text;
}
