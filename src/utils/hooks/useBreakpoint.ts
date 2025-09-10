import * as Device from 'expo-device';
import { useEffect, useMemo, useState } from 'react';
import { Dimensions, Platform } from 'react-native';

// Breakpoints (px / dp)
const SM_MIN   = 640;   // >= sm  → tablet
const LG_MIN   = 1024;  // >= lg  → desktop

type Category = 'mobile' | 'tablet' | 'desktop';

const categoryFromWidth = (width: number): Category => {
  if (width >= LG_MIN) return 'desktop';
  if (width >= SM_MIN) return 'tablet';
  return 'mobile';
};

export const useBreakpoint = () => {
  const [category, setCategory] = useState<Category>(() =>
    categoryFromWidth(Dimensions.get('window').width)
  );

  // Plate-formes (mémoïsé pour éviter les recomputations)
  const isWeb     = useMemo(() => Platform.OS === 'web', []);
  const isAndroid = useMemo(() => Platform.OS === 'android', []);
  const isIOS     = useMemo(() => Platform.OS === 'ios', []);

  // Détection initiale : si Device dit “TABLET”, on force au moins 'tablet'
  useEffect(() => {
    (async () => {
      const deviceType = await Device.getDeviceTypeAsync();
      if (
        deviceType === Device.DeviceType.TABLET &&
        category === 'mobile'
      ) {
        setCategory('tablet');
      }
    })();
  }, [category]);

  // Listener sur le redimensionnement / rotation
  useEffect(() => {
    const onChange = ({ window: { width } }: { window: { width: number } }) =>
      setCategory(categoryFromWidth(width));

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription.remove();
  }, []);

  return {
    breakpoint : category,        // 'mobile' | 'tablet' | 'desktop'
    isMobile   : category === 'mobile',
    isTablet   : category === 'tablet',
    isDesktop  : category === 'desktop',
    isWeb,
    isAndroid,
    isIOS,
  };
};
