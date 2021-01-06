import React from 'react';
// import Button from './SearchButton';
import { ContainerInputSearch, Container, LabelError } from './styles';

interface LabelInputForm {
  placeholder: string;
  name: string;
  value: string;
  onChange: (value: any) => void;
  type?: string;
  hasError?: string | false | undefined;
  style?:any
}

const InputForm: React.FC<LabelInputForm> = ({
  placeholder,
  name,
  hasError,
  type,
  style,
  ...rest
}) => {
  console.log('hasError', hasError);
  // console.log('rest', ...rest);
  return (
    <>
      <Container style={style}>
        <ContainerInputSearch
          placeholder={placeholder}
          name={name}
          type={type}
          {...rest}
        />
      </Container>
      {hasError && <LabelError>{hasError}</LabelError>}
    </>
  );
};

export default InputForm;
