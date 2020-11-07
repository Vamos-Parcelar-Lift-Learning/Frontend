import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email incorreto. Digite seu email novamente!'),
  password: yup
    .string()
    .required('Senha incorreta. Digite sua senha novamente!')
    .length(8, 'Senha incorreta!'),
});
