import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { hideNavigationBar } from 'react-native-navigation-bar-color';

import 'react-native-gesture-handler';

import Routes from '~/routes';
import { lightTheme } from '~/theme';

const App: React.FC = () => {
  useEffect(() => {
    // Hide navigation android
    hideNavigationBar();
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={lightTheme.colors.background}
          barStyle="light-content"
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
