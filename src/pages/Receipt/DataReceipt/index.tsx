import React from 'react';

import { Container, Label, Data } from './styles';

type DataReceiptProps = {
  label: string;
  data: string;
};

const DataReceipt: React.FC<DataReceiptProps> = ({ label, data }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Data>{data}</Data>
    </Container>
  );
};

export default DataReceipt;
