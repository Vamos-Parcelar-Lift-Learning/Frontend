import React from 'react';

import { ButtonContainer, useStyles, Loading } from './styles';

interface ButtonProps {
  children: any;
  loading?: boolean;
  style: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  style,
}) => {
  const classes = useStyles();

  return (
    <ButtonContainer
      style={style}
      classes={{
        root: classes.button,
        label: classes.label,
      }}
    >
      {loading ? <Loading style={{ width: 25, height: 25 }} /> : children}
    </ButtonContainer>
  );
};

export default Button;
