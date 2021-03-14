import React, { useEffect } from 'react';
import { KeyboardAvoidingView, StatusBar, View, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/images/logo.png';

import Input from '../../components/Input/index';
import Button from '../../components/Button';

import { BotaoCriarConta, BotatoCriarContaTexto, Container, ContainerBody, EsqueceuSenhaBotao, EsqueceuSenhaBotaoTexto, Image, TitlePage } from './styles';

const SignIn: React.FC = () => {
  useEffect(() => {
    console.log('Iniciou a Aplicacao')
  }, [])

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        showHideTransition="slide"
        networkActivityIndicatorVisible
        backgroundColor="#FFD500"
        translucent
        animated
      />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1}}
          enabled
        >
          <LinearGradient
            colors={['#FFD500','#FF7527']}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingLeft: 40,
              paddingRight: 40
            }}
          >
            <Container>
              <ContainerBody>
                <Image source={logoImg} />
                <TitlePage style={{
                  elevation: 4,
                  shadowOffset: { width: 5, height: 5 },
                  shadowColor: '#321e38',
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                }}
                >Acesse sua conta</TitlePage>

                <Input
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                  name="email"
                  label="E-mail"
                  icon="mail"
                  placeholder="Digite seu e-mail"
                />

                <Input
                  keyboardType="default"
                  type="password"
                  name="password"
                  label="Senha"
                  icon="lock"
                  placeholder="Digite sua senha"
                />

                <Button onPress={() => console.log('Clicou em entrar')}>Entrar</Button>

                <EsqueceuSenhaBotao>
                  <EsqueceuSenhaBotaoTexto>Esqueceu sua senha</EsqueceuSenhaBotaoTexto>
                </EsqueceuSenhaBotao>
              </ContainerBody>
              <BotaoCriarConta>
                <Icon name="log-in" size={20} color="#312e38" />
                <BotatoCriarContaTexto>Criar uma Conta</BotatoCriarContaTexto>
              </BotaoCriarConta>
            </Container>
          </LinearGradient>
      </KeyboardAvoidingView>
    </>
  )
}

export default SignIn;
