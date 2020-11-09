import React from 'react';
import { Link } from 'react-router-dom';
import { MdReceipt } from 'react-icons/md';
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
  return (
    <Container>
      <Header />
      <HeaderReceipt>
        <MdReceipt color={colors.PRIMARY} size={45} title="Comprovante" />
        <Title>Comprovante</Title>
      </HeaderReceipt>
      <FirstRowInfo>
        <DataReceipt label="Data do pagamento" data="22/07/2020" />
        <DataReceipt label="Localizador" data="P7913F" />
        <DataReceipt label="Cashback ganho" data="R$5" />
      </FirstRowInfo>
      <SecondRowInfo>
        <DataReceipt label="Total de contas" data="R$ 120,00" />
        <DataReceipt label="Descontos" data="R$ 0" />
        <DataReceipt label="Total de serviço" data="R$ 0" />
        <DataReceipt label="Total pago" data="R$ 120,00" />
      </SecondRowInfo>

      <ContainerButtons>
        <FisrtButtonsContainer>
          <ButtonWhite label="IMPRIMIR" />
          <ButtonWhite label="COMPARTILHAR" />
        </FisrtButtonsContainer>

        <Link to="/receipt">
          <ButtonBlue label="VOLTAR PARA O INICIO" />
        </Link>
      </ContainerButtons>
    </Container>
  );
};

export default Receipt;
