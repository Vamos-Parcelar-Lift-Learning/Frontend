import React from 'react';
import { ContainerButton } from './styles';

interface LabelButton {
  label: string;
  name: string;
  style?: any;
}

const HeaderButton: React.FC<LabelButton> = ({ label, name, style }) => {
  return <ContainerButton style={style} className={name}>{label}</ContainerButton>;
};

export default HeaderButton;
