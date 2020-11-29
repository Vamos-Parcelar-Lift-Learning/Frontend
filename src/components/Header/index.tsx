import React from 'react';
import get from 'lodash/get'
import { Icons } from '../../assets';
import { Logo } from '../Sidebar/styles';
import userPicture from '../../images/user.png';
import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';
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
  const { user } = useAuth();
  const { locator } = useCart();
  return (
    <Container>
      <IconDiv>
        <CardImage src={Icons.ICON_LOCALIZATOR} />
        <TitleLocalization>{get(locator, 'locators.code', '')}</TitleLocalization>
      </IconDiv>
      <CashBackContainer>
        <CashBack>
          <CashBackText>{`Cashback: R$ ${user.cashback},00`}</CashBackText>
        </CashBack>
      </CashBackContainer>
      <Avatar src={userPicture} />
    </Container>
  );
};

export default Header;
