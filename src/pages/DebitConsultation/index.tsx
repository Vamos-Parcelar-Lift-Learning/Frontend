import React from 'react';
import { Link } from 'react-router-dom';
import { Button, DebitCard, Header } from '../../components';

import { Container, ListContainer, Title } from './styles';

const DebitConsultation: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>Débitos rastreados</Title>
      <ListContainer>
        <DebitCard />
        <DebitCard />
        <DebitCard />
        <DebitCard />
        <DebitCard />
        <DebitCard />
        <DebitCard />
        <DebitCard />
        <DebitCard />
        <DebitCard />
        <DebitCard />
      </ListContainer>

      <Link to="/payment" style={{ textDecoration: 'none' }}>
        <Button style={{ marginTop: 20 }} onClick={() => {}}>
          Seguir
        </Button>
      </Link>
    </Container>
  );
};

export default DebitConsultation;
