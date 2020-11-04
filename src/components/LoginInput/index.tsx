import React from 'react';
// import Button from './SearchButton';
import { ContainerInputSearch, Container } from './styles';

interface LabelLoginInput {
  placeholder: string;
  name: string;
}

const LoginInput: React.FC<LabelLoginInput> = ({ placeholder, name }) => {
  return (
    <Container>
      <ContainerInputSearch placeholder={placeholder} name={name} />
      {/* <Button /> */}
    </Container>
  );
};

export default LoginInput;
