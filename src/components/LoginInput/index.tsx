import React from 'react';
// import Button from './SearchButton';
import { ContainerInputSearch, Container } from './styles';

interface LabelLoginInput {
  placeholder: string;
  name: string;
  // value: string;
  // onChange: any;
}

const LoginInput: React.FC<LabelLoginInput> = ({
  placeholder,
  name,
  ...rest
}) => {
  return (
    <Container>
      <ContainerInputSearch placeholder={placeholder} name={name} {...rest} />
      {/* <Button /> */}
    </Container>
  );
};

export default LoginInput;
