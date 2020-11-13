import React, { useState } from 'react';
import { Button, Header, PaymentModal, SelectInput, CartInput } from '../../components';
import CARD_PIX from '../../assets/card_pix.svg';

import {
  Container,
  Title,
  CardPix,
  Card,
  CardContainer,
  ValueContainer,
  ValueText,
  TitleField,
  FieldContainer,
  FieldValue,
  TitleCard,
  SelectContainer
} from './styles';

const Payment: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Header />
      <CardContainer>
        <Card>
          <Title>PIX</Title>
          <CardPix src={CARD_PIX} />
          <SelectContainer>
            <TitleCard>Tipo de chave:</TitleCard>
            <SelectInput />
            <TitleCard>Chave</TitleCard>
            <CartInput  />
          </SelectContainer>

          <ValueContainer>
            <ValueText>Valor original: </ValueText>
            <ValueText>R$ 180,00</ValueText>
          </ValueContainer>
        </Card>
      </CardContainer>
      <CardContainer>
        <TitleField>Cashback</TitleField>
        <FieldContainer>
          <FieldValue>R$ 10,00</FieldValue>
        </FieldContainer>
      </CardContainer>


      <CardContainer>
        <TitleField>Valor final:</TitleField>
        <TitleField style={{ fontWeight: 'bold' }}>R$ 790,00</TitleField>
      </CardContainer>

      <Button style={{ marginTop: 20 }} onClick={() => setOpen(true)}>
        Pagar
      </Button>

      <PaymentModal open={open} setOpen={setOpen} />

    </Container>
  );
};

export default Payment;
