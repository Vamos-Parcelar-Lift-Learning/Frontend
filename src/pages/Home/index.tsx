import React from 'react';
import HeaderButton from '../../components/HeaderButton/index';
import InputSearch from '../../components/InputSearch/index';

const Home: React.FC = () => {
  return (
    <h1>
      <HeaderButton left="741.3px" label="Login" />
      <HeaderButton left="835.3px" label="Sign up" />
      <InputSearch
        left="68.66px"
        top="312.6px"
        placeholder="Insira o código localizador"
      />
    </h1>
  );
};

export default Home;
