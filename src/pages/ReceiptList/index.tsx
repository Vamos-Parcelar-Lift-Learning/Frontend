import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Table,
  Title,
  HeaderTr,
  ReceiptItems,
  Button
} from './styles';
import Header from '../../components/Header';

const receipts = [
  {
    name: 'ContaXablau',
    date: '18/06/2020 11:30',
    amount: 'R$ 790, 00'
  },
  {
    name: 'ContaXablau',
    date: '18/06/2020 11:30',
    amount: 'R$ 790, 00'
  },
  {
    name: 'ContaXablau',
    date: '18/06/2020 11:30',
    amount: 'R$ 790, 00'
  },
  {
    name: 'ContaXablau',
    date: '18/06/2020 11:30',
    amount: 'R$ 790, 00'
  }
];

const ReceiptList: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>Histórico dos seus comprovantes</Title>
      <Table>
        <HeaderTr>
          <th>Data</th>
          <th>Nome</th>
          <th>Valor</th>
          <th> </th>
        </HeaderTr>
        {receipts.map(receipt => (
          <ReceiptItems key={receipt.name}>
            <td>{receipt.date}</td>
            <td>{receipt.name}</td>
            <td>{receipt.amount}</td>
            {/* <td>{receipt.amount}</td> */}
            <Link to="/receiptDetail">
              {/* <Link to={`/receipt/${encodeURIComponent(receipt.name)}`}> */}
              <Button>Visualizar</Button>
            </Link>
          </ReceiptItems>
        ))}
      </Table>
    </Container>
  );
};

export default ReceiptList;
