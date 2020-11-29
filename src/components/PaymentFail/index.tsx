import React from 'react';
import { Dialog } from '@material-ui/core';
import { Container, PaymentImage, Info, Text, CheckImage } from './styles';
import PAYMENT_QRCODE from '../../assets/payment_qrcode.svg';
import Button from '../Button'
import { Imgs } from '../../assets'

interface PaymentModalProps {
  setOpen: (open: boolean) => void;
  open: boolean;
}

const PaymentFail: React.FC<PaymentModalProps> = ({ open, setOpen }) => {
  return (
    <Dialog
      id="PaymentQRCODE"
      onClose={() => setOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={open}
      PaperProps={{ style: { maxWidth: '100%', borderRadius: 20 } }}
    >
      <Container>
        <CheckImage src={Imgs.FAIL_PAYMENT} />
        <PaymentImage src={PAYMENT_QRCODE} />

        <Info>
          Houve um erro ao processar o pagamento.
        </Info>

        <Button style={{marginTop: 30}} onClick={()=>{}}>
          <Text>Retornar</Text>
        </Button>
      </Container>
    </Dialog>
  );
};

export default PaymentFail;
