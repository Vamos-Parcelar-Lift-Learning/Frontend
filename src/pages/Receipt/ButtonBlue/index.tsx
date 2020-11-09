import React from 'react';

import { Button } from './styles';

type DataReceiptProps = {
  label: string;
};

const ButtonBlue: React.FC<DataReceiptProps> = ({ label }) => {
  return <Button>{label}</Button>;
};

export default ButtonBlue;
