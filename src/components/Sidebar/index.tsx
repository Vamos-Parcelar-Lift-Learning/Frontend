import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, ContainerMenu, Logo, WrapperLogo, TranslateButton} from './styles';
import { useAuth } from '../../hooks/auth';
import { SidebarData } from './SidebarData';
import SidebarButton from './SidebarButton';
import Button from "../Button";
import colors from '../../styles/colors';
import { Icons } from '../../assets';

const Sidebar: React.FC = () => {

  const {t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const { signOut } = useAuth();

  return (
    <Container>
      <WrapperLogo>
        <Logo src={Icons.LOGO_WHITE} />
      </WrapperLogo>

      <ContainerMenu>
        {SidebarData.map(item => {
          if(item.signOut){
            return (
              <Link
                to={item.path}
                key={item.id}
                style={{ textDecoration: 'none' }}
              >
                <SidebarButton title={t(item.title)} onClick={signOut} />
              </Link>
            );

          }

            return (
              <Link
                to={item.path}
                key={item.id}
                style={{ textDecoration: 'none' }}
              >
                <SidebarButton title={t(item.title)} />
              </Link>
            );

        })}
        <TranslateButton>
          <Button
            style={{color: colors.fontPrimary,
                background: 'transparent',
                padding: 0,
                margin: 10,
                borderColor: colors.fontPrimary,
                width: 'auto'}}
            name="ENbutton"
            onClick={() => changeLanguage('en')}
          >
            English

          </Button>
          <Button
            style={{color: colors.fontPrimary,
                background: 'transparent',
                padding: 0,
                margin: 10,
                borderColor: colors.fontPrimary,
                width: 'auto'}}
            name="PTbutton"
            onClick={() => changeLanguage('pt')}
          >
            Português

          </Button>
        </TranslateButton>
      </ContainerMenu>
    </Container>
  );
};

export default Sidebar;
