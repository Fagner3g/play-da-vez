import styled from 'styled-components/native';
import ButtonBase from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.Text`
  color: white;
`;

export const Image = styled.Image`
  width: 300px;
  height: 300px;
`;

export const ButtonArea = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const Button = styled(ButtonBase)`
  margin-top: 20px;
`;
