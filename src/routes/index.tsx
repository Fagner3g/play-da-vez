import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Preload from '~/pages/Preload';
import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
