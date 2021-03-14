import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background-color: #F5F5F5;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #312e38;
  font-family: 'Roboto-Regular';
`

export const InputIcon = styled(Icon)`
  margin-right: 8px;
`
