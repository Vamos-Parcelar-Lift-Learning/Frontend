import React, { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import get from 'lodash/get'
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
import { useToast } from '../../hooks/toast'
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
import api from '../../services/api';

const Payment: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openSucess, setOpenSucess] = useState(false);
  const [openFail, setOpenFail] = useState(false);
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(false);
  const { bills } = useCart();
  const { user } = useAuth();
  const { addToast } = useToast();

  const amount = useMemo(()=>{
    let total = 0;
    bills.forEach(item=>{
      total +=item.amonut
    })

    return total;
  }, [bills]);

  const handlePayment = useCallback(async ()=>{
    try{
      setLoading(true);
      const body = {
        key: "Giseli99@bol.com.br",
	      cashback: 0,
        transaction: {
          nickname: "asd",
          bills: bills.map((item)=>({...item, amount: item.amonut}))
    	  }
      }
      const response = await api.post('transactions/', body);
      setTransaction(response.data);
      setLoading(false);
      setOpen(true);

    }catch(err){
      addToast({
        type: 'error',
        title: 'Ops',
        description: 'Não foi possível efetuar o pagamento'
      });
    }
  },[bills, addToast])

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

      <Button name="Pay" loading={loading} style={{ marginTop: 20 }} onClick={handlePayment}>
        {t('paymentbutton')}
      </Button>

      <PaymentModal qrCode={get(transaction, 'participant.qrcode', '')} open={open} setOpen={setOpen} />

      <PaymentSucess open={openSucess} setOpen={setOpenSucess} />

      <PaymentFail open={openFail} setOpen={setOpenFail} />

    </Container>
  );
};

export default Payment;
