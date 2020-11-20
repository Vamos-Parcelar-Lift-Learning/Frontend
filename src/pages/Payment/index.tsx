import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
            <ValueText>
              {t('paymentoriginalvalue')}
            </ValueText>
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
        <TitleField>{t('paymentfinalvalue')}</TitleField>

        <TitleField style={{ fontWeight: 'bold' }}>R$ 790,00</TitleField>
      </CardContainer>

      <Button style={{ marginTop: 20 }} onClick={() => setOpen(true)}>
        {t('paymentbutton')}
      </Button>

      <PaymentModal open={open} setOpen={setOpen} />

    </Container>
  );
};

export default Payment;
