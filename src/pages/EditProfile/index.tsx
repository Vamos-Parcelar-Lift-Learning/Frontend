import React from 'react';
import Button from '../../components/Button';
import InputEditProfile from '../../components/InputEditProfile';
import {
  Title1,
  Title2,
  Title3,
  Container,
  SubContainer,
  ContainerName,
  ContainerField
} from './styles';
import user from '../../images/user.png';

const EditProfile: React.FC = () => {
  return (
    <Container>
      <Title1>Editar Perfil</Title1>
      <SubContainer>
        <img src={user} alt="Alterar Foto de Perfil" />
        <Title2>Alterar Foto</Title2>
      </SubContainer>
      <ContainerName>
        <Title3>Nome:</Title3>
        <ContainerField>
          <InputEditProfile name="Name" placeholder="Digite seu Nome" />
        </ContainerField>
        <Title3>Data de Nascimento:</Title3>
        <InputEditProfile name="Birthday" placeholder="   /   /    " />
        <Title3>CPF:</Title3>
        <InputEditProfile name="CPF" placeholder="Digite seu CPF" />
      </ContainerName>
      <Button>Salvar</Button>
    </Container>
  );
};

export default EditProfile;
