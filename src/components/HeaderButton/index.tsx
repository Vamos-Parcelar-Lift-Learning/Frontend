import React from 'react';
import { ContainerButton } from './styles';

interface LabelButton {
  label: string;
  name: string;
}

const HeaderButton: React.FC<LabelButton> = ({ label, name }) => {
  return <ContainerButton className={name}>{label}</ContainerButton>;
};

export default HeaderButton;
