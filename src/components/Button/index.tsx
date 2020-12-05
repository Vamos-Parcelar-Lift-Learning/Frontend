import React from 'react';

import { ButtonContainer, useStyles, Loading } from './styles';

interface ButtonProps {
  children: any;
  loading?: boolean;
  style?: any;
  onClick?: () => void;
  name?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  style,
  onClick,
  name = '',
}) => {
  const classes = useStyles();

  return (
    <ButtonContainer
      name={name}
      style={style}
      classes={{
        root: classes.button,
        label: classes.label
      }}
      onClick={onClick}
    >
      {loading ? <Loading style={{ width: 23, height: 23 }} /> : children}
    </ButtonContainer>
  );
};

export default Button;
