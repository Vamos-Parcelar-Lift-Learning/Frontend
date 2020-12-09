import React from 'react';
import { Dialog } from '@material-ui/core';
import { Container, PaymentImage, Info, CheckImage, Text } from './styles';
import PAYMENT_QRCODE from '../../assets/payment_qrcode.svg';
import {Imgs} from '../../assets'
import Button from '../Button'

interface PaymentModalProps {
  setOpen: (open: boolean) => void;
  open: boolean;
}

const PaymentSucess: React.FC<PaymentModalProps> = ({ open, setOpen }) => {
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

        <Button style={{marginTop: 30}} onClick={()=>{}}>
          <Text>Acessar comprovante</Text>
        </Button>
      </Container>
    </Dialog>
  );
};

export default PaymentSucess;
