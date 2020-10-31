import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ContainerMenu, Logo, WrapperLogo } from './styles';
import { SidebarData } from './SidebarData';
import SidebarButton from './SidebarButton';
import { Icons } from '../../assets';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <WrapperLogo>
        <Link to="/">
          <Logo src={Icons.LOGO_WHITE} />
        </Link>
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
