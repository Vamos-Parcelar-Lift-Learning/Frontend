import React from 'react';

import { Button } from './styles';

type DataReceiptProps = {
  label: string;
};

const ButtonWhite: React.FC<DataReceiptProps> = ({ label }) => {
  return <Button>{label}</Button>;
};

export default ButtonWhite;
