import React from 'react';
import { TextProps } from 'react-native';
import { TextBase } from './styles';

export interface Props extends TextProps {
  color?: string;
  size?: string;
}

const Text: React.FC<Props> = ({ children, ...res }) => {
  return <TextBase {...res}>{children}</TextBase>;
};

export default Text;
