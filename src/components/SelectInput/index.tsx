import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

import { Container, SelectButton } from './styles';

interface SelectInputPros{
  style?:any
}

const SelectInput: React.FC<SelectInputPros> = ({...rest}) => {
  return (
    <Container {...rest}>
      <SelectButton
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        // onChange={handleChange}
        disableUnderline
        SelectDisplayProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <MenuItem value={10}>CPF</MenuItem>
        <MenuItem value={20}>CNPJ</MenuItem>
        <MenuItem value={30}>Telefone</MenuItem>
      </SelectButton>
    </Container>
);
}

export default SelectInput;
