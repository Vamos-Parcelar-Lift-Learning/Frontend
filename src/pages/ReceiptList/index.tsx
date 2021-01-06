import React, { useEffect, useState } from 'react';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import {
  Container,
  Table,
  Title,
  HeaderTr,
  ReceiptItems,
  Button,
  Scroll
} from './styles';
import Header from '../../components/Header';

const ReceiptList: React.FC = () => {
  const { t } = useTranslation();
  const [dataReceipts, setDataReceipt] = useState<any[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => {
      const formatResp = response.data.map(
        (receipt: {
          created_at: string | number | Date;
          amount: number | bigint;
        }) => ({
          ...receipt,
          created_at: new Date(receipt.created_at).toLocaleDateString(),
          amount: formatPrice(receipt.amount),
          total_payment: Number(receipt.amount)
        })
      );
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
          <th style={{ marginRight: 90 }}>{t('receiptlistvalue')}</th>
          <th> </th>
        </HeaderTr>
        {dataReceipts?.map(
          (receipt: {
            _id: string | number | null | undefined;
            created_at: React.ReactNode;
            nickname: React.ReactNode;
            amount: React.ReactNode;
            total_payment: any;
            cashback_used: any;
          }) => (
            <ReceiptItems key={receipt._id}>
              <td>{receipt.created_at}</td>
              <td>{receipt.nickname}</td>
              <td>{formatPrice(receipt.total_payment- receipt.cashback_used)}</td>
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
