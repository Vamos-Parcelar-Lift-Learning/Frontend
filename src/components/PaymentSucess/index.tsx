import React from 'react';
import { Dialog } from '@material-ui/core';
import {  useHistory } from 'react-router-dom';
import { Container, PaymentImage, Info, CheckImage, Text } from './styles';
import PAYMENT_QRCODE from '../../assets/payment_qrcode.svg';
import {Imgs} from '../../assets'
import Button from '../Button'

interface PaymentModalProps {
  setOpen: (open: boolean) => void;
  open: boolean;
  receiptDetail: any
}

const PaymentSucess: React.FC<PaymentModalProps> = ({ open, setOpen, receiptDetail }) => {
  const history = useHistory();

  return (
    <Dialog
      id="PaymentQRCODE"
      onClose={() => setOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={open}
      PaperProps={{ style: { maxWidth: '100%', borderRadius: 20 } }}
    >
      <Container>
        <CheckImage src={Imgs.CHECK_PAYMENT} />
        <PaymentImage src={PAYMENT_QRCODE} />

        <Info>
          Pagamento realizado com sucesso!
        </Info>

        <Button
          style={{marginTop: 30}}
          onClick={()=>{
          history.push('/receiptDetail', { receiptDetail });
        }}
        >
          <Text>Acessar comprovante</Text>
        </Button>
      </Container>
    </Dialog>
  );
};

export default PaymentSucess;
