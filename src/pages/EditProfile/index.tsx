import React from 'react';
import { Button } from '../../components';
import {
  Title1,
  Title2,
  Title3,
  Container,
  SubContainer,
  ContainerName,
  ContainerData,
  ContainerCPF
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
      </ContainerName>
      <ContainerData>
        <Title3>Data de Nascimento:</Title3>
      </ContainerData>
      <ContainerCPF>
        <Title3>CPF:</Title3>
      </ContainerCPF>
      <Button>Salvar</Button>
    </Container>
  );
};

export default EditProfile;
