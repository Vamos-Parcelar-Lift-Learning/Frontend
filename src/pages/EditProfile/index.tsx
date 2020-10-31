import React from 'react';
import { Button } from '../../components';
import {
  Container,
  Title1,
  Title2,
  Title3,
  SubContainer,
  ContainerLeft
} from './styles';
import user from '../../images/user.png';

const EditProfile: React.FC = () => {
  return (
    <SubContainer>
      <Container>
        <Title1>Editar Perfil</Title1>
        <ContainerLeft>
          <img src={user} alt="Alterar Foto de Perfil" />
          <Title2>Alterar Foto</Title2>
        </ContainerLeft>
      </Container>
      <Button>Salvar</Button>
    </SubContainer>
  );
};

export default EditProfile;
