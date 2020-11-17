import React from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import colors from '../../styles/colors';
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
  ButtonContainer,
  Wrapper,
  BoxContainer,
  Header
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

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Wrapper>
      <BoxContainer>
        <Container>
          <Header>
            <Button
              style={{color: colors.PRIMARY,
                background: colors.fontPrimary,
                borderColor: colors.PRIMARY,
                width: 0}}
              onClick={() => changeLanguage('en')}
            >
              English

            </Button>
            <Button
              style={{color: colors.PRIMARY,
                background: colors.fontPrimary,
                borderColor: colors.PRIMARY,
                width: 0}}
              onClick={() => changeLanguage('pt')}
            >
              Português

            </Button>
          </Header>
          <TitleContainer>{t('titlelogin')}</TitleContainer>
          <ImgContainer src={Imgs.LOGIN_IMAGE} />

          <InputContainer>
            <InputLabelContainer>{t('Usuário:')}</InputLabelContainer>
            <InputForm
              name="User"
              value={formik.values.email}
              placeholder={t('Digite seu e-mail')}
              onChange={value => {
            formik.setFieldValue('email', value.target.value);
          }}
              hasError={formik.touched.email && formik.errors.email}
            />
            <InputLabelContainer>{t('Senha:')}</InputLabelContainer>
            <InputForm
              value={formik.values.password}
              name="Password"
              placeholder={t('Digite sua senha')}
              onChange={value => {
            formik.setFieldValue('password', value.target.value);
          }}
              hasError={formik.touched.password && formik.errors.password}
            />
            <ButtonContainer>
              <Button style={{ width: 20 }} onClick={formik.submitForm}>
                {t('Seguir')}
              </Button>
            </ButtonContainer>
          </InputContainer>
        </Container>
      </BoxContainer>
    </Wrapper>
  );
};

export default LoginPage;
