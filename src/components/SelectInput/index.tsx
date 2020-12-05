import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

import { Container, SelectButton } from './styles';

interface SelectInputPros{
  style?:any
  onChange:any;
}

const SelectInput: React.FC<SelectInputPros> = ({onChange, ...rest}) => {
  return (
    <Container {...rest}>
      <SelectButton
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={v => onChange(v.target.value)}
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
