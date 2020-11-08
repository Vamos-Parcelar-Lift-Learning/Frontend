import React from 'react';
import Button from '../../components/Button';
import InputEditProfile from '../../components/InputEditProfile';
import Calendar from '../../components/Calendar';

import {
  Title1,
  Title2,
  Title3,
  Container,
  SubContainer,
  ContainerName,
  ContainerField,
  Avatar
} from './styles';
import user from '../../images/user.png';

const EditProfile: React.FC = () => {
  return (
    <Container>
      <Title1>Editar Perfil</Title1>
      <SubContainer>
        <Avatar src={user} alt="Alterar Foto de Perfil" />
        <Title2>Alterar Foto</Title2>
      </SubContainer>
      <ContainerName>
        <Title3>Nome:</Title3>
        <ContainerField>
          <InputEditProfile name="Name" placeholder="Digite seu Nome" />
        </ContainerField>
        <Title3>CPF:</Title3>
        <InputEditProfile name="CPF" placeholder="Digite seu CPF" />
        <Title3>Data de Nascimento:</Title3>
        <Calendar />
      </ContainerName>
      <Button>Salvar</Button>
    </Container>
  );
};

export default EditProfile;
