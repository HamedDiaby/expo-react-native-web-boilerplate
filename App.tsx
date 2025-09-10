import React from 'react';
import { ThemeProvider } from '@rneui/themed';
import { AppContextProvider } from '@data/contexts';
import { Navigation } from '@navigation';
import { theme } from '@utils/themes';
import { useInitFont } from '@utils/hooks';

export default function App() {

  const { isReady: fontsReady } = useInitFont();

  if (!fontsReady) {
    return null;
  }

  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </AppContextProvider>
  );
}
