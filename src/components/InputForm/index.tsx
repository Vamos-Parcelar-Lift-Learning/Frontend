import React from 'react';
// import Button from './SearchButton';
import { ContainerInputSearch, Container } from './styles';

interface LabelInputForm {
  placeholder: string;
  name: string;
  value: string;
  onChange: (value: any) => void;
  type?: string;
  hasError?: string | false | undefined;
}

const InputForm: React.FC<LabelInputForm> = ({
  placeholder,
  name,
  hasError,
  type,
  ...rest
}) => {
  return (
    <Container>
      <ContainerInputSearch placeholder={placeholder} name={name} type={type} {...rest} />
      {/* <Button /> */}
    </Container>
  );
};

export default InputForm;
