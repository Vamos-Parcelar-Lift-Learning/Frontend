import React, { useCallback } from 'react';
import {  useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, DebitCard, Header } from '../../components';
import { Container, ListContainer, Title } from './styles';
import { useCart } from '../../hooks/cart';
import { useAuth } from '../../hooks/auth';

const DebitConsultation: React.FC = () => {
  const { locator } = useCart();
  const { user } = useAuth();
  const history = useHistory();

  const handleNext = useCallback(() => {
    if (user) {
      history.push('/payment');
    } else {
      history.push('/login');
    }
  }, [history, user]);

  const { t } = useTranslation();


  return (
    <Container>
      <Header />
      <Title>{t('debitconsultationtitle')}</Title>
      <ListContainer>
        {locator?.locators?.bills && locator?.locators?.bills.map(bill => (
          <DebitCard key={bill.code} bill={bill} />
        ))}
      </ListContainer>

      <Button style={{ marginTop: 20 }} onClick={handleNext}>
        {t('debitconsultationbutton')}
      </Button>
    </Container>
  );
};

export default DebitConsultation;
