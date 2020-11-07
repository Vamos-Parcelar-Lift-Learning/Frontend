import React from 'react';
import { useFormik } from 'formik';
import LoginInput from '../../components/LoginInput';
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
  ButtonContainer,
} from './styles';

// eslint-disable-next-line react/prop-types
const LoginPage: React.FC = () => {
  const { signIn } = useAuth();

  const submitLogin = async () => {
    await signIn({
      email: formik.values.email, // 'nayara.barros75@live.com'
      password: formik.values.password, // '747901'
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    initialErrors: {
      email: ' ',
      password: ' ',
    },
    validationSchema: loginValidationSchema,
    onSubmit: submitLogin,
  });

  return (
    <Container>
      <TitleContainer>Digite seus dados de Login</TitleContainer>
      <ImgContainer src={Imgs.LOGIN_IMAGE} />

      <form onSubmit={formik.handleSubmit}>
        <InputContainer>
          <InputLabelContainer>Usuário:</InputLabelContainer>
          <LoginInput
            name="User"
            // value={formik.values.email}
            placeholder="Digite seu e-mail"
            // onChange={value =>
            //   formik.setFieldValue('email', value.target.value)
            // }
            // hasError={formik.errors.email}
          />
          <InputLabelContainer>Senha:</InputLabelContainer>
          <LoginInput
            // value={formik.values.password}
            name="Password"
            placeholder="Digite sua senha"
            // onChange={value =>
            //   formik.setFieldValue('password', value.target.value)}
            // hasError={formik.errors.password}
          />
          <ButtonContainer>
            <Button style={{ width: 20 }} onClick={submitLogin}>
              Seguir
            </Button>
          </ButtonContainer>
        </InputContainer>
      </form>
    </Container>
  );
};

export default LoginPage;
