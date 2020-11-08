import React from 'react';

import { ButtonContainer, useStyles, Loading } from './styles';

interface ButtonProps {
  children: any;
  loading?: boolean;
  style?: any;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  style,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <ButtonContainer
      style={style}
      classes={{
        root: classes.button,
        label: classes.label,
      }}
      onClick={onClick}
    >
      {loading ? <Loading style={{ width: 25, height: 25 }} /> : children}
    </ButtonContainer>
  );
};

export default Button;
