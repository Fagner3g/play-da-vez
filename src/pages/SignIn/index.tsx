import React from 'react';

import Logo from '~/assets/Logo.png';

import { Container, Image, Button, ButtonArea } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={Logo} />
      <ButtonArea>
        <Button onPress={() => {}} title="Google+" color="#db3236" />
        <Button onPress={() => {}} title="Facebook" color="#3b5998" />
      </ButtonArea>
    </Container>
  );
};

export default SignIn;
