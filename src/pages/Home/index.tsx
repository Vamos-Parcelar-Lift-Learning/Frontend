import React from 'react';
import { Link } from 'react-router-dom';
import HeaderButton from '../../components/HeaderButton/index';
import InputSearch from '../../components/InputSearch/index';
import CardLandingPage from '../../components/CardLandingPage/index';
import { Icons } from '../../assets';
import { CARD_DATA } from '../../components/CardLandingPage/CardsData';

import {
  Container,
  ContainerCard,
  LeftContainer,
  RightContainer,
  Logo,
  Title,
  InfoTitle,
  Header,
  WrapperLogo,
  WrapperInputSearch,
  WrapperTitle,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
        <WrapperLogo>
          <Link to="/">
            <Logo src={Icons.LOGO_BLUE} />
          </Link>
        </WrapperLogo>

        <WrapperTitle>
          <Title>
            Faça o pagamento dos seus débitos
            <span>fácil|</span>
          </Title>
        </WrapperTitle>

        <WrapperInputSearch>
          <InputSearch
            name="InputSearch"
            placeholder="Insira o código localizador"
          />
        </WrapperInputSearch>

        <InfoTitle>
          Utilize o número do localizador para consultar seus débitos. É
          simples, basta digitar o código no campo de pesquisa acima.
        </InfoTitle>
      </LeftContainer>

      <RightContainer>
        <Header>
          <Link to="/about_us">
            <span>Sobre nós</span>
          </Link>
          <Link to="/login">
            <HeaderButton name="login" label="Login" />
          </Link>
        </Header>

        <ContainerCard>
          {CARD_DATA.map(card => (
            <CardLandingPage key={card.id} text={card.title} icon={card.img} />
          ))}
        </ContainerCard>
      </RightContainer>
    </Container>
  );
};

export default Home;
