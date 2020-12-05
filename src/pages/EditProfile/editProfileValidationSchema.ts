import * as yup from 'yup';

const regCpf = /(^([0-9]{3})(.[0-9]{3}){2}-[0-9]{2}$|^[0-9]{11}$)/;

export const editProfileValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Nome não pode conter menos de 3 caracteres')
    .required('Nome obrigatório. Digite seu nome por gentileza'),
  cpf: yup
    .string()
    .required('CPF obrigatório. Digite seu CPF por gentileza ')
    .matches(regCpf, 'CPF inválido')
});
