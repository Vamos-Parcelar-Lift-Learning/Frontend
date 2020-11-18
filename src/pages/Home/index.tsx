import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';
import HeaderButton from '../../components/HeaderButton';
import InputSearch from '../../components/InputSearch/index';
import CardLandingPage from '../../components/CardLandingPage';
import { Icons } from '../../assets';
import { CARD_DATA } from '../../components/CardLandingPage/CardsData';
import { useCart } from '../../hooks/cart';
import { useToast } from '../../hooks/toast';
import colors from '../../styles/colors';

import {
  Container,
  ContainerCard,
  LeftContainer,
  RightContainer,
  Logo,
  Title,
  InfoTitle,
  Header,
  WrapperLogo,
  WrapperInputSearch,
  WrapperTitle
} from './styles';

const Home: React.FC = () => {
  const { getLocator } = useCart();
  const { addToast } = useToast();
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const [searchLocator, setSearchLocator] = useState('');

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

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container>
      <LeftContainer>
        <WrapperLogo>
          <Link to="/">
            <Logo src={Icons.LOGO_BLUE} />
          </Link>
        </WrapperLogo>

        <WrapperTitle>
          <Title>{t('title')}</Title>
        </WrapperTitle>

        <WrapperInputSearch>
          <InputSearch
            name="InputSearch"
            placeholder={t('locator')}
            onClick={handleLocator}
            value={searchLocator}
            onChange={setSearchLocator}
          />
        </WrapperInputSearch>

        <InfoTitle>{t('infotitle')}</InfoTitle>
      </LeftContainer>

      <RightContainer>
        <Header>
          <Button
            style={{color: colors.PRIMARY,
                background: 'transparent',
                padding: 0,
                margin: 0,
                borderColor: colors.PRIMARY,
                width: 'auto',
                fontstyle: 'normal',
                fontweight: 500,
                }}
            onClick={() => changeLanguage('en')}
          >
            English

          </Button>
          <Button
            style={{color: colors.PRIMARY,
                background: 'transparent',
                padding: 0,
                margin: 0,
                borderColor: colors.PRIMARY,
                width: 'auto',
                fontstyle: 'normal',
                fontweight: 500,}}
            onClick={() => changeLanguage('pt')}
          >
            Português

          </Button>
          <Link to="/about_us">
            <span>{t('about')}</span>
          </Link>
          <Link to="/login">
            <HeaderButton name="login" label={t('login')} />
          </Link>
        </Header>

        <ContainerCard>
          {CARD_DATA.map(card => (
            <CardLandingPage key={card.id} text={card.title} icon={card.img} />
          ))}
        </ContainerCard>
      </RightContainer>
    </Container>
  );
};

export default Home;
