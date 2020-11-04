import * as yup from 'yup';

export const userValidationSchema = yup.object().shape({
  email: yup.string().email().required('Email incorreto. Tente novamente!'),
  password: yup
    .string()
    .required('Não foi possível logar, digite a senha novamente!')
    .length(8, 'Senha incorreta!'),
});
