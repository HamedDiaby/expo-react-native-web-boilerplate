import React from 'react';
import { AppContextProvider } from '@data/contexts';
import { Navigation } from '@navigation';
import { useInitFont } from '@utils/hooks';

export default function App() {

  const { isReady: fontsReady } = useInitFont();

  if (!fontsReady) {
    return null;
  }

  return (
    <AppContextProvider>
      <Navigation />
    </AppContextProvider>
  );
}
