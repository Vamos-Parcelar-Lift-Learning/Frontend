import React from 'react';
import { useFormik } from 'formik';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
import { Imgs } from '../../assets';
import { loginValidationSchema } from './loginValidationSchema';
import { useAuth } from '../../hooks/auth';
// import { useToast } from '../../hooks/toast';

import {
  Container,
  TitleContainer,
  InputContainer,
  ImgContainer,
  InputLabelContainer,
  ButtonContainer
} from './styles';

interface FormikValue {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { signIn } = useAuth();

  const submitLogin = async (data: FormikValue) => {
    await signIn({
      email: data.email,
      password: data.password
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    initialErrors: {
      email: ' ',
      password: ' '
    },
    validationSchema: loginValidationSchema,
    onSubmit: submitLogin
  });

  return (
    <Container>
      <TitleContainer>Digite seus dados de Login</TitleContainer>
      <ImgContainer src={Imgs.LOGIN_IMAGE} />

      <InputContainer>
        <InputLabelContainer>Usuário:</InputLabelContainer>
        <InputForm
          name="User"
          value={formik.values.email}
          placeholder="Digite seu e-mail"
          onChange={value => {
            formik.setFieldValue('email', value.target.value);
          }}
          hasError={formik.touched.email && formik.errors.email}
        />
        <InputLabelContainer>Senha:</InputLabelContainer>
        <InputForm
          value={formik.values.password}
          name="Password"
          placeholder="Digite sua senha"
          onChange={value => {
            formik.setFieldValue('password', value.target.value);
          }}
          hasError={formik.touched.password && formik.errors.password}
        />
        <ButtonContainer>
          <Button style={{ width: 20 }} onClick={formik.submitForm}>
            Seguir
          </Button>
        </ButtonContainer>
      </InputContainer>
    </Container>
  );
};

export default LoginPage;
