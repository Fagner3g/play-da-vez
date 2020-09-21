import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Logo from '~/assets/Logo.png';

import { Container, Image } from './styles';

const Preload: React.FC = () => {
  const navigation = useNavigation();

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
