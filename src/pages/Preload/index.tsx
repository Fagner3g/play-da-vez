import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation, useTheme } from '@react-navigation/native';

import Logo from '~/assets/Logo.png';

import { Container, Image } from './styles';

const Preload: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token !== null) {
        // Validar o token
      } else {
        navigation.reset({ routes: [{ name: 'SignIn' }] });
      }
    };

    setTimeout(() => {
      checkToken();
    }, 3000);
  }, []);

  return (
    <Container>
      <Image source={Logo} />
    </Container>
  );
};

export default Preload;
