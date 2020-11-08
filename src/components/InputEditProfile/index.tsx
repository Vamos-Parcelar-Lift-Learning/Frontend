import React from 'react';
import { Container1, Container } from './styles';

interface LabelEditProfile {
  placeholder: string;
  name: string;
}

const InputEditProfile: React.FC<LabelEditProfile> = ({
  placeholder,
  name
}) => {
  return (
    <Container>
      <Container1 placeholder={placeholder} name={name} />
    </Container>
  );
};

export default InputEditProfile;
