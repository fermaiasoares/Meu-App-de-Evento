import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 340px;
  height: 60px;
  border-radius: 16px;

  background-color: #FF7527;
  align-items: center;
  justify-content: center;

  margin: 24px auto;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #F5F5F5;
  font-size: 16px;

  elevation: 5;
`
