import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ContainerMenu, Logo, WrapperLogo } from './styles';
import { SidebarData } from './SidebarData';
import SidebarButton from './SidebarButton';
import logoWhite from '../../assets/logoWhite.svg';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <WrapperLogo>
        <Logo src={logoWhite} />
      </WrapperLogo>

      <ContainerMenu>
        {SidebarData.map(item => {
          return (
            <Link
              to={item.path}
              key={item.id}
              style={{ textDecoration: 'none' }}
            >
              <SidebarButton title={item.title} />
            </Link>
          );
        })}
      </ContainerMenu>
    </Container>
  );
};

export default Sidebar;
