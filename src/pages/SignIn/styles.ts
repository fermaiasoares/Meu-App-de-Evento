import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerBody = styled.View`
  align-items: center;
`

export const ContainerFooter = styled.View`
  width: 100%;
  height: 60px;
`

export const Image = styled.Image`
  margin-top: 80px;
`

export const TitlePage = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: #F5F5F5;

  margin-top: 20px;
  margin-bottom: 24px;
`
export const EsqueceuSenhaBotao = styled.TouchableOpacity`
`

export const EsqueceuSenhaBotaoTexto = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: #F5F5F5;
`

export const BotaoCriarConta = styled.View`
  width: 340px;
  height: 40px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border-width: 1px;
  border-color: #f5f5f5;

  margin-bottom: ${ getBottomSpace() + 20 }px;
`

export const BotatoCriarContaTexto = styled.Text`
`

