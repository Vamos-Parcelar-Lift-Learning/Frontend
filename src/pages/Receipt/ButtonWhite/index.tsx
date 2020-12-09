import React from 'react';

import { Button } from './styles';

type DataReceiptProps = {
  label: string;
  onClick?: () => void;
};

const ButtonWhite: React.FC<DataReceiptProps> = ({ label, onClick }) => {
  return <Button onClick={onClick}>{label}</Button>;
};

export default ButtonWhite;
