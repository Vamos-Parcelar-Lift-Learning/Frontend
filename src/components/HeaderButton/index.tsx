import React from 'react';
import PropTypes from 'prop-types';
import { ContainerButton } from './styles';

interface ButtonConfigurationProps {
  left: '835.3px' | '741.3px';
}

interface LabelButton extends ButtonConfigurationProps {
  label: string;
}

const HeaderButton: React.FC<LabelButton> = ({ label }, { left }) => {
  return (
    <div>
      <ContainerButton left={left}>{label}</ContainerButton>
    </div>
  );
};

HeaderButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default HeaderButton;
