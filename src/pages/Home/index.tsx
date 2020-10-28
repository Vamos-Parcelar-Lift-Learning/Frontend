import React from 'react';
import HeaderButton from '../../components/HeaderButton/index';
import InputSearch from '../../components/InputSearch/index';
import ContainerLandingPage from '../../components/LandingPageBackgound/index';
import CardLandingPage from '../../components/CardLandingPage/index';
import logoBlue from '../../assets/logoBlue.svg';
import {
  Container,
  ContainerCard,
  LeftContainer,
  RightContainer,
  Logo,
  Title,
  InfoTitle,
  Header,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
        <Logo src={logoBlue} />
        <Title>Faça o pagamento dos seus débitos fácil|</Title>
        <InputSearch
          name="InputSearch"
          className="LandingInputSearch"
          placeholder="Insira o código localizador"
        />
        <InfoTitle>
          Utilize o número do localizador para consultar seus débitos. É
          simples, basta digitar o código no campo de pesquisa acima.
        </InfoTitle>
      </LeftContainer>
      <RightContainer>
        <Header>
          <span>Sobre nós</span>
          <HeaderButton name="login" label="Login" />
          <HeaderButton name="signup" label="Sign up" />
        </Header>
        <ContainerCard>
          <CardLandingPage text="Escolha o que você quer pagar" />
          <CardLandingPage text="Pague com o Pix" />
          <CardLandingPage text="Receba Cashback" />
        </ContainerCard>
      </RightContainer>
      {/* <ContainerLandingPage /> */}
    </Container>
  );
};

export default Home;
