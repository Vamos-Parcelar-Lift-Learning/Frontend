import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email incorreto. Digite seu email novamente!'),
  password: yup
    .string()
    .min(6, 'Senha não pode conter menos de 6 caracteres')
    .max(15, 'Senha não pode conter mais de 15 caracteres')
    .required('Senha incorreta. Digite sua senha novamente!'),
});
