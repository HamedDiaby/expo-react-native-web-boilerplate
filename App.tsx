import React from 'react';
import { ThemeProvider } from '@rneui/themed';
import { AppContextProvider } from '@contexts';
import { Navigation } from '@navigation';
import { theme } from '@themes';
import { useInitFont } from '@utils/hooks';

export default function App() {

  useInitFont();

  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </AppContextProvider>
  );
}
