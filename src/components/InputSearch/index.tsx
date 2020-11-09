import React from 'react';
import Button from './SearchButton';
import { ContainerInputSearch, Container } from './styles';

interface LabelInputSearch {
  placeholder: string;
  name: string;
  onClick: () => void;
  onChange: any;
  value: string;
}

const InputSearch: React.FC<LabelInputSearch> = ({
  placeholder,
  name,
  onClick,
  onChange,
  value
}) => {
  return (
    <Container>
      <ContainerInputSearch
        placeholder={placeholder}
        name={name}
        onChange={v => onChange(v.target.value)}
        value={value}
      />
      <Button onClick={onClick} />
    </Container>
  );
};

export default InputSearch;
