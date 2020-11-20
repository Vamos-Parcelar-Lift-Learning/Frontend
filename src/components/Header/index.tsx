import React from 'react';
import { Icons } from '../../assets';
import { Logo } from '../Sidebar/styles';
import userPicture from '../../images/user.png';

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
      <Avatar src={userPicture} />
    </Container>
  );
};

export default Header;
