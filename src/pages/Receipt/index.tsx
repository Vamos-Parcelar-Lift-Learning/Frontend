import React, { useEffect, useState } from 'react';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
import { Link, useLocation } from 'react-router-dom';
import { MdReceipt } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import colors from '../../styles/colors';
import {
  Container,
  HeaderReceipt,
  Title,
  FirstRowInfo,
  SecondRowInfo,
  ContainerButtons,
  FisrtButtonsContainer
} from './styles';
import { formatPrice } from '../../utils/format';
import Header from '../../components/Header';
import DataReceipt from './DataReceipt';
import ButtonWhite from './ButtonWhite';
import ButtonBlue from './ButtonBlue';

const Receipt: React.FC = () => {
  const [receipt, setReceipt] = useState<any>();
  const { t } = useTranslation();
  const printContent = () => {
    window.print();
  };
  const location: any = useLocation();
  console.log(location)
  useEffect(() => {
    const receiptItem = location?.state.receiptDetail;
    receiptItem.cashback_generated = formatPrice(
      receiptItem.cashback_generated
    );

    setReceipt(receiptItem);
  }, [location]);

  return (
    <Container>
      <Header />
      <PrintProvider>
        <Print single name="receipt">
          <HeaderReceipt>
            <MdReceipt color={colors.PRIMARY} size={45} title={t('receipt')} />
            <Title>{t('receipt')}</Title>
          </HeaderReceipt>
          {receipt && (
            <>
              <FirstRowInfo>
                <DataReceipt label={t('payday')} data={receipt.created_at} />
                <DataReceipt
                  label={t('locator_code')}
                  data={receipt.bills[0].code}
                />
                <DataReceipt
                  label={t('cashback')}
                  data={receipt.cashback_generated}
                />
              </FirstRowInfo>
              <SecondRowInfo>
                <DataReceipt
                  label={t('total_account')}
                  data={receipt.amount}
                />
                <DataReceipt label={t('discount')} data="R$ 0" />
                <DataReceipt label={t('total_service')} data="R$ 0" />
                <DataReceipt
                  label={t('total_payment')}
                  data={receipt.amount}
                />
              </SecondRowInfo>
            </>
          )}
          <NoPrint>
            <ContainerButtons>
              <FisrtButtonsContainer>
                <ButtonWhite
                  onClick={() => printContent()}
                  label={t('print')}
                />
              </FisrtButtonsContainer>
              <Link to="/receipt">
                <ButtonBlue label={t('return')} />
              </Link>
            </ContainerButtons>
          </NoPrint>
        </Print>
      </PrintProvider>
    </Container>
  );
};

export default Receipt;
