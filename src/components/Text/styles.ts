import styled from 'styled-components/native';

export const TextBase: any = styled.Text<{ color?: string; size?: number }>`
  color: ${({ theme, color }) => (color ? color : theme.colors.buttonText)};
  font-size: ${({ size }) => (size ? size : '16px')};
`;
