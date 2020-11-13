import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Container, ContainerMenu, Logo, WrapperLogo } from './styles';
import { SidebarData } from './SidebarData';
import SidebarButton from './SidebarButton';
import { Icons } from '../../assets';

const Sidebar: React.FC = () => {
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
                <SidebarButton title={item.title} onClick={signOut} />
              </Link>
            );

          }

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
