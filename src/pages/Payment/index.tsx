import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Header,
  SelectInput,
  CartInput,
  PaymentModal,
  PaymentSucess,
  PaymentFail,
} from '../../components';

import CARD_PIX from '../../assets/card_pix.svg';
import { useCart } from '../../hooks/cart'
import { useAuth } from '../../hooks/auth'
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
  const [openSucess, setOpenSucess] = useState(false);
  const [openFail, setOpenFail] = useState(false);
  const { bills } = useCart();
  const { user } = useAuth();

  const amount = useMemo(()=>{
    let total = 0;
    bills.forEach(item=>{
      total +=item.amonut
    })

    return total;
  }, [bills]);

  return (
    <Container>
      <Header />
      <CardContainer>
        <Card>
          <Title>PIX</Title>
          <CardPix src={CARD_PIX} />
          <SelectContainer>
            <TitleCard>{t('key_type')}</TitleCard>
            <SelectInput />
            <TitleCard>{t('cart_key')}</TitleCard>
            <CartInput  />
          </SelectContainer>

          <ValueContainer>
            <ValueText>
              {t('paymentoriginalvalue')}
            </ValueText>
            <ValueText>{`R$ ${amount},00`}</ValueText>
          </ValueContainer>
        </Card>
      </CardContainer>
      <CardContainer>
        <TitleField>Cashback</TitleField>
        <FieldContainer>
          <FieldValue>{`R$ ${user.cashback},00`}</FieldValue>
        </FieldContainer>
      </CardContainer>


      <CardContainer>
        <TitleField>{t('paymentfinalvalue')}</TitleField>

        <TitleField style={{ fontWeight: 'bold' }}>{`R$ ${amount - user.cashback},00`}</TitleField>
      </CardContainer>

      <Button name="Pay" style={{ marginTop: 20 }} onClick={() => setOpen(true)}>
        {t('paymentbutton')}
      </Button>

      <PaymentModal open={open} setOpen={setOpen} />

      <PaymentSucess open={openSucess} setOpen={setOpenSucess} />

      <PaymentFail open={openFail} setOpen={setOpenFail} />

    </Container>
  );
};

export default Payment;
