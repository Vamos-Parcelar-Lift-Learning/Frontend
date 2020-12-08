import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../../services/api';

import {
  Container,
  Table,
  Title,
  HeaderTr,
  ReceiptItems,
  Button
} from './styles';
import Header from '../../components/Header';

const ReceiptList: React.FC = () => {
  const { t } = useTranslation();
  const [dataReceipts, setDataReceipt] = useState<any[]>([]);

  useEffect(() => {
    // const response = api.get('/transactions')
    // console.log('response', response)
    api.get('transactions').then(response => {
      setDataReceipt(response.data);
    });
  }, []);
  // const cityNames = response.data.map(city => city.nome);
  // setCities(cityNames)

  console.log('dataReceipt', dataReceipts);
  return (
    <Container>
      <Header />
      <Title>{t('receiptlisttitle')}</Title>
      <Table>
        <HeaderTr>
          <th>{t('receiptlistdata')}</th>
          <th>{t('receiptlistname')}</th>
          <th>{t('receiptlistvalue')}</th>
          <th> </th>
        </HeaderTr>
        {dataReceipts?.map(
          (receipt: {
            _id: string | number | null | undefined;
            created_at: React.ReactNode;
            nickname: React.ReactNode;
            amount: React.ReactNode;
          }) => (
            <ReceiptItems key={receipt._id}>
              {/* <td>{Number(receipt.created_at)?.toLocaleDateString()}</td> */}
              <td>{receipt.created_at?.toLocaleString()}</td>
              <td>{receipt.nickname}</td>
              <td>{receipt.amount}</td>
              {/* <td>{receipt.amount}</td> */}
              {/* <Link to="/receiptDetail">
              <Button>{t('receiptlistbutton')}</Button>
            </Link> */}
              <Link
                to={{
                  pathname: '/receiptDetail',
                  state: {
                    receiptDetail: receipt
                  }
                }}
              >
                <Button>{t('receiptlistbutton')}</Button>
              </Link>
            </ReceiptItems>
          )
        )}
      </Table>
    </Container>
  );
};

export default ReceiptList;
