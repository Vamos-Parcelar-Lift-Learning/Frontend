import React from 'react';
import PrintProvider, {Print, NoPrint} from "react-easy-print"
import { Link } from 'react-router-dom';
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
import Header from '../../components/Header';
import DataReceipt from './DataReceipt';
import ButtonWhite from './ButtonWhite';
import ButtonBlue from './ButtonBlue';

const Receipt: React.FC = () => {
  const { t } = useTranslation();
  const printContent = () => {
    window.print();
   };
  return (
    <Container>
      <Header />
      <PrintProvider>
        <Print single name='receipt'>
          <HeaderReceipt>
            <MdReceipt color={colors.PRIMARY} size={45} title={t('receipt')} />
            <Title>{t('receipt')}</Title>
          </HeaderReceipt>
          <FirstRowInfo>
            <DataReceipt label={t('payday')} data="22/07/2020" />
            <DataReceipt label={t('locator_code')} data="P7913F" />
            <DataReceipt label={t('cashback')} data="R$5" />
          </FirstRowInfo>
          <SecondRowInfo>
            <DataReceipt label={t('total_account')} data="R$ 120,00" />
            <DataReceipt label={t('discount')} data="R$ 0" />
            <DataReceipt label={t('total_service')} data="R$ 0" />
            <DataReceipt label={t('total_payment')} data="R$ 120,00" />
          </SecondRowInfo>
          <NoPrint>
            <ContainerButtons>
              <FisrtButtonsContainer>
                <ButtonWhite onClick={() => printContent()} label={t('print')} />
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
