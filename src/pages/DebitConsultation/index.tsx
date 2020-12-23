import React, { useCallback, useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, DebitCard, Header } from '../../components';
import { Container, ListContainer, Title, InputLocatorContainer } from './styles';
import InputSearch from '../../components/InputSearch';
import { useCart } from '../../hooks/cart';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

const DebitConsultation: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();
  const { getLocator, locator, bills } = useCart();
  const { addToast } = useToast();
  const [searchLocator, setSearchLocator] = useState('');

  const handleNext = useCallback(() => {
    if(bills.length === 0){
      addToast({
        type: 'info',
        title: 'Ops',
        description: 'Nenhum débito selecionado'
      });
    }
    else if (user) {
      history.push('/payment');
    } else {
      history.push('/login', { nextRoute: '/payment' });
    }
  }, [history, user, bills, addToast]);


const { t } = useTranslation();
  const handleLocator = useCallback(async () => {
    try {
      await getLocator(searchLocator);
      history.push('/debit_consultation');
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Ops',
        description: 'Não foi possível pesquisar o localizador'
      });
    }
  }, [history, getLocator, searchLocator, addToast]);

  return (
    <Container>
      {user &&(
        <Header />
      )}
      <InputLocatorContainer>
        <InputSearch
          name="InputSearch"
          placeholder={t('debitsearchlocator')}
          onClick={handleLocator}
          value={searchLocator}
          onChange={setSearchLocator}
        />
      </InputLocatorContainer>
      <Title>{t('debitconsultationtitle')}</Title>
      <ListContainer>
        {locator?.bills && locator?.bills.map(bill => (
          <DebitCard key={bill.code} bill={bill} />
        ))}
      </ListContainer>

      <Button name="ToPayment" style={{ marginTop: 20 }} onClick={handleNext}>
        {t('debitconsultationbutton')}
      </Button>
    </Container>
  );
};

export default DebitConsultation;
