import React from 'react';

import {
  Container,
  TitleLocalization,
  CashBack,
  CashBackText,
  Avatar,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <TitleLocalization>FKMJX909780</TitleLocalization>
      <CashBack>
        <CashBackText>Cashback: R$ 20,00</CashBackText>
      </CashBack>
      <Avatar />
    </Container>
  );
};

export default Header;
