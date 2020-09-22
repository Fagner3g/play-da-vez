import React from 'react';
import { ButtonProps } from 'react-native';
import Text from '~/components/Text';

import { Container } from './styles';

interface Props extends ButtonProps {
  color?: string;
  textColor?: string;
  textSize?: string;
}

const Button: React.FC<Props> = ({ title, textColor, textSize, ...res }) => {
  return (
    <Container {...res}>
      <Text color={textColor} size={textSize}>
        {title}
      </Text>
    </Container>
  );
};

export default Button;
