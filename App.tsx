import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { AppContextProvider } from '@data/contexts';
import { Navigation } from '@navigation';
import { useInitFont } from '@utils/hooks';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const { isReady: fontsReady } = useInitFont();

  if (!fontsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <BottomSheetModalProvider>
          <AppContextProvider>
            <Navigation />
          </AppContextProvider>
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
