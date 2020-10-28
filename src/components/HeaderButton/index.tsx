import React from 'react';
import PropTypes from 'prop-types';
import { ContainerButton } from './styles';

interface LabelButton {
  label: string;
  name: string;
}

const HeaderButton: React.FC<LabelButton> = ({ label, name }) => {
  return (
    <div>
      <ContainerButton className={name}>{label}</ContainerButton>
    </div>
  );
};

HeaderButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default HeaderButton;
