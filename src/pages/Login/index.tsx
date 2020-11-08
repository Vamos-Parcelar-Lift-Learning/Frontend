import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../../components/LoginInput';
import Button from '../../components/Button';
import { Imgs } from '../../assets';
// import { userValidationSchema } from './userValidationSchema';
import {
  Container,
  TitleContainer,
  InputContainer,
  ImgContainer,
  InputLabelContainer,
  ButtonContainer
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
        <ButtonContainer>
          <Link to="/debit_consultation">
            <Button style={{ width: 20 }}>Seguir</Button>
          </Link>
        </ButtonContainer>
      </InputContainer>
    </Container>
  );
};

export default LoginPage;
