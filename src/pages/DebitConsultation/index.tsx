import React, { useCallback, useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { Button, DebitCard, Header} from '../../components';
import InputSearch from '../../components/InputSearch';
import { Container, ListContainer, Title, InputLocatorContainer } from './styles';
import { useCart } from '../../hooks/cart';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

const DebitConsultation: React.FC = () => {
  const { locator } = useCart();
  const { user } = useAuth();
  const history = useHistory();
  const { getLocator } = useCart();
  const { addToast } = useToast();
  const [searchLocator, setSearchLocator] = useState('');

  const handleNext = useCallback(() => {
    if (user) {
      history.push('/payment');
    } else {
      history.push('/login');
    }
  }, [history, user]);

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
      <Header />
      <InputLocatorContainer>
        <InputSearch
          name="InputSearch"
          placeholder="Insira o código localizador"
          onClick={handleLocator}
          value={searchLocator}
          onChange={setSearchLocator}
        />

      </InputLocatorContainer>

      <Title>Débitos rastreados</Title>
      <ListContainer>
        {locator?.locators?.bills && locator?.locators?.bills.map(bill => (
          <DebitCard key={bill.code} bill={bill} />
        ))}
      </ListContainer>

      <Button style={{ marginTop: 20 }} onClick={handleNext}>
        Seguir
      </Button>
    </Container>
  );
};

export default DebitConsultation;
