import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createTheme, ThemeProvider } from '@rneui/themed';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import useCachedResources from './hooks/useCachedResources';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { store } from './store/store';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
