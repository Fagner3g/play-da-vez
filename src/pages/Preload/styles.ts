import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 300px;
  height: 300px;
`;
