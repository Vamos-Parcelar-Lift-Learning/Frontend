import React from 'react';
import LoginInput from '../../components/LoginInput';
import { Imgs } from '../../assets';
import {
  Container,
  TitleContainer,
  InputContainer,
  ImgContainer,
  InputLabelContainer,
} from './styles';

// eslint-disable-next-line react/prop-types
const LoginPage: React.FC = () => {
  return (
    <Container>
      <TitleContainer>Digite seus dados de Login</TitleContainer>
      <ImgContainer src={Imgs.LOGIN_IMAGE} />
      <InputContainer>
        <InputLabelContainer>Usuário:</InputLabelContainer>
        <LoginInput name="UserInput" placeholder="Digite seu e-mail" />
        <InputLabelContainer>Senha:</InputLabelContainer>
        <LoginInput name="PasswordInput" placeholder="Digite sua senha" />
      </InputContainer>
    </Container>
  );
};

export default LoginPage;
