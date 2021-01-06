import React from 'react';
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import colors from '../../styles/colors';
import Button from '../../components/Button';
import CardLandingPage from '../../components/CardLandingPage';
import { CARD_DATA } from './CardsData';
import HeaderButton  from '../../components/HeaderButton';
import {
  TitleContainer,
  Header,
  Title,
  ContainerCard,
  RightContainer
} from './styles';

const LoginPage: React.FC = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Header>
        <Link to="/">
          <HeaderButton
            style={{color: colors.PRIMARY,
                background: colors.fontPrimary,
                borderColor: colors.PRIMARY,
                width: 80}}
            name="home"
            label="Voltar"
          />
        </Link>
        <Button
          style={{color: colors.PRIMARY,
                background: 'transparent',
                padding: 0,
                margin: 10,
                borderColor: colors.PRIMARY,
                width: 'auto'}}
          onClick={() => changeLanguage('en')}
        >
          English

        </Button>
        <Button
          style={{color: colors.PRIMARY,
                background: 'transparent',
                padding: 0,
                margin: 10,
                borderColor: colors.PRIMARY,
                width: 'auto'}}
          onClick={() => changeLanguage('pt')}
        >
          Português
        </Button>
      </Header>
      <RightContainer>
        <TitleContainer>
          <Title>{t('about')}</Title>
        </TitleContainer>
        <ContainerCard>
          {CARD_DATA.map(card => (
            <CardLandingPage key={card.id} text={t(card.title)} icon={card.img} link={card.link} />
          ))}
        </ContainerCard>
      </RightContainer>
    </>
  );
};

export default LoginPage;
