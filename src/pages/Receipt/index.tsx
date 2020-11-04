import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Title,
  Icon,
  FirstRowInfo,
  SecondRowInfo,
  ContainerButtons,
  FisrtButtonsContainer,
} from './styles';

import DataReceipt from './DataReceipt';

const Receipt: React.FC = () => {
  return (
    <Container>
      <Header>
        <Icon />
        <Title>Comprovante</Title>
      </Header>
      <FirstRowInfo>
        <DataReceipt label="Data do pagamento" data="45" />
        <DataReceipt label="Localizador" data="45" />
        <DataReceipt label="Cashback ganho" data="45" />
      </FirstRowInfo>
      <SecondRowInfo>
        <DataReceipt label="Total de contas" data="45" />
        <DataReceipt label="Descontos" data="45" />
        <DataReceipt label="Total de serviço" data="45" />
        <DataReceipt label="Total pago" data="45" />
      </SecondRowInfo>

      <ContainerButtons>
        <FisrtButtonsContainer>
          <button type="button" style={{ marginRight: 5 }}>
            IMPRIMIR
          </button>
          <button type="button">COMPARTILHAR</button>
        </FisrtButtonsContainer>

        <Link to="/receipt">
          <button type="button">VOLTAR PARA O INICIO</button>
        </Link>
      </ContainerButtons>
    </Container>
  );
};

export default Receipt;
