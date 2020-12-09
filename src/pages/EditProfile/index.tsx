import React from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { formatISO } from 'date-fns';
import colors from '../../styles/colors';
import Button from '../../components/Button';
import InputForm from '../../components/InputForm';
import Calendar from '../../components/Calendar';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { editProfileValidationSchema } from './editProfileValidationSchema';

import {
  Title1,
  Title2,
  Title3,
  Container,
  SubContainer,
  ContainerName,
  ContainerField,
  Avatar,
  CashBack,
  CashBackText,
  ContainerImage,
  Header

} from './styles';
import userPicture from '../../images/user.png';

interface FormikValue {
  name: string;
  cpf: string;
  birthdate: string;
}

const EditProfile: React.FC = () => {
  const { user, updateUser } = useAuth();

  // console.log('user-', user);
  const submitEditProfile = async (data: FormikValue) => {
    const response = await api.put('/users', data);
    updateUser(response.data);
  };

  const formik = useFormik({
    initialValues: {
      name: user.name,
      cpf: user.cpf,
      birthdate: user.birthdate
    },
    initialErrors: {
      name: ' ',
      cpf: ' '
    },
    validationSchema: editProfileValidationSchema,
    onSubmit: submitEditProfile
  });

  const { t } = useTranslation();
  return (
    <Container>
      <Title1>{t('titleeditarperfil')}</Title1>
      <Header />
      <ContainerImage>
        <SubContainer>
          <Avatar src={userPicture} alt="Alterar Foto de Perfil" />
          <Title2>{t('editarphoto')}</Title2>
        </SubContainer>
        <CashBack>
          <CashBackText>Cashback: R$ 20,00</CashBackText>
        </CashBack>
      </ContainerImage>
      <ContainerName>
        <Title3>{t('titleeditname')}</Title3>
        <ContainerField>
          <InputForm
            name="Name"
            value={formik.values.name}
            placeholder={t('editname')}
            onChange={value => {
              formik.setFieldValue('name', value.target.value);
            }}
            hasError={formik.touched.name && formik.errors.name}
          />
        </ContainerField>
        <Title3>{t('editcpftitle')}</Title3>
        <InputForm
          name="CPF"
          value={formik.values.cpf}
          placeholder={t('editcpf')}
          onChange={value => {
            formik.setFieldValue('cpf', value.target.value);
          }}
          hasError={formik.touched.cpf && formik.errors.cpf}
        />
        <Title3>{t('dateofbirth')}</Title3>
        <Calendar
          value={formik.values.birthdate}
          name="Birthdate"
          placeholder="Digite sua senha"
          onChange={value => {
            formik.setFieldValue('birthdate', formatISO(value));
          }}
          hasError={formik.touched.birthdate && formik.errors.birthdate}
        />
      </ContainerName>
      <Button name="NextEdit" onClick={formik.submitForm}>{t('savebutton')}</Button>
    </Container>
  );
};

export default EditProfile;
