import React from 'react';
import { Wrapper, BoxContainer } from './styles';
import Sidebar from '../../components/Sidebar';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <BoxContainer>{children}</BoxContainer>
    </Wrapper>
  );
};

export default DefaultLayout;
