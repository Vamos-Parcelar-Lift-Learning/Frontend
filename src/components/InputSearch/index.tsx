import React from 'react';
import Button from './SearchButton';
import { ContainerInputSearch, Container } from './styles';

interface LabelInputSearch {
  placeholder: string;
  name: string;
}

const InputSearch: React.FC<LabelInputSearch> = ({ placeholder, name }) => {
  return (
    <Container>
      <ContainerInputSearch placeholder={placeholder} name={name} />
      <Button />
    </Container>
  );
};

export default InputSearch;
