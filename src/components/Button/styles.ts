import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ color?: string }>`
  height: 50px;
  width: 100%;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.primary};
  justify-content: center;
  align-items: center;
`;
