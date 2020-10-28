import React from 'react';
import HeaderButton from '../../components/HeaderButton/index';
import InputSearch from '../../components/InputSearch/index';
import ContainerLandingPage from '../../components/LandingPageBackgound/index';
import CardLandingPage from '../../components/CardLandingPage/index';

const Home: React.FC = () => {
  return (
    <div>
      <HeaderButton name="login" label="Login" />
      <HeaderButton name="signup" label="Sign up" />
      <InputSearch
        name="InputSearch"
        className="LandingInputSearch"
        placeholder="Insira o código localizador"
      />
      <ContainerLandingPage />
      <div>
        <CardLandingPage text="Escolha o que você quer pagar" />
      </div>
      <div>
        <CardLandingPage text="Pague com o Pix" />
      </div>
      <div>
        <CardLandingPage text="Receba Cashback" />
      </div>
    </div>
  );
};

export default Home;
