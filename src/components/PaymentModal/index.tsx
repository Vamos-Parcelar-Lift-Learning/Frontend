import React from 'react';
import { Dialog, LinearProgress } from '@material-ui/core';
import { Container, PaymentImage, Info } from './styles';
import PAYMENT_QRCODE from '../../assets/payment_qrcode.svg';

interface PaymentModalProps {
  setOpen: (open: boolean) => void;
  open: boolean;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ open, setOpen }) => {
  return (
    <Dialog
      onClose={() => setOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={open}
      PaperProps={{ style: { maxWidth: '100%', borderRadius: 20 } }}
    >
      <Container>
        <PaymentImage src={PAYMENT_QRCODE} />
        <div style={{ width: '80%', marginTop: 20 }}>
          <LinearProgress />
        </div>

        <Info>
          Utilize seu aparelho celular para fazer a leitura do Qrcode acima,
          efetue o pagamento e aguarde.
        </Info>
      </Container>
    </Dialog>
  );
};

export default PaymentModal;
