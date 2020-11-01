import React from 'react';
import { Button, DebitCard } from '../../components';

import { Container, ListContainer, Title } from './styles';

const Cart: React.FC = () => {
  return (
    <Container>
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

      <Button style={{ marginTop: 20 }}>Seguir</Button>
    </Container>
  );
};

export default Cart;
