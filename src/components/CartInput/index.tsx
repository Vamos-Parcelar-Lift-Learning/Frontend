import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

import { Container, InputButton } from './styles';

interface SelectInputPros{
  style?:any
}

const CartInput: React.FC<SelectInputPros> = ({...rest}) => {
  return (
    <Container {...rest}>
      <InputButton
        // value={age}
        // onChange={handleChange}
        InputProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            fontSize: 13
          },
          disableUnderline: true
        }}

      >
        <MenuItem value={10}>CPF</MenuItem>
        <MenuItem value={20}>CNPJ</MenuItem>
        <MenuItem value={30}>Telefone</MenuItem>
      </InputButton>
    </Container>
);
}

export default CartInput;
