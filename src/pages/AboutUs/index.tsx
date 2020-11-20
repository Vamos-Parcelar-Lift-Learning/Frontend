import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';
import HeaderButton  from '../../components/HeaderButton';
import { Wrapper, BoxContainer, Header, ContentBoxContainer } from './styles';

const AboutUs: React.FC = () => {
  return (
    <Wrapper>
      <BoxContainer>
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
        </Header>
        <ContentBoxContainer>
          <h1>Sobre nós</h1>
        </ContentBoxContainer>
      </BoxContainer>
    </Wrapper>
  );
};

export default AboutUs;
