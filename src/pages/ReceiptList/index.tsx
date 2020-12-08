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
    api.get('transactions').then(response => {
      const formatResp = response.data.map((receipt: { created_at: any }) => ({
        ...receipt,
        created_at: new Date(receipt.created_at).toLocaleDateString()
      }));
      setDataReceipt(formatResp);
    });
  }, []);

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
              <td>{receipt.created_at}</td>
              <td>{receipt.nickname}</td>
              <td>{receipt.amount}</td>
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
