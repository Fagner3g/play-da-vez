import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Logo from '~/assets/images/Logo.png';

import { Container, Image, Button, ButtonArea } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.reset({ routes: [{ name: 'Home' }] });
  }

  return (
    <Container>
      <Image source={Logo} />
      <ButtonArea>
        <Button onPress={() => {}} title="Google+" color="#db3236" />
        <Button onPress={() => {}} title="facebook" color="#3b5998" />
      </ButtonArea>
    </Container>
  );
};

export default SignIn;
