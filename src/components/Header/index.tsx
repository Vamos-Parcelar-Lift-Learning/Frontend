import React from 'react';
import { Icons } from '../../assets';
import { Logo } from '../Sidebar/styles';

import {
  Container,
  TitleLocalization,
  CashBack,
  CashBackText,
  Avatar,
  CardImage,
  IconDiv,
  CashBackContainer
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <IconDiv>
        <CardImage src={Icons.ICON_LOCALIZATOR} />
        <TitleLocalization>FKMJX909780</TitleLocalization>
      </IconDiv>
      <CashBackContainer>
        <CashBack>
          <CashBackText>Cashback: R$ 20,00</CashBackText>
        </CashBack>
      </CashBackContainer>
      <Avatar />
    </Container>
  );
};

export default Header;
