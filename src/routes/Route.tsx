import React from 'react';
import {
  RouteProps as RouteDOMProps,
  Route as RouteDOM,
  Redirect
} from 'react-router-dom';
import DefaultLayout from '../pages/DefaultLayout';
import { Wrapper, BoxContainer } from './styles'
import { useAuth } from '../hooks/auth';

interface RouteProps extends RouteDOMProps {
  isPrivate?: boolean;
  hasSidebar?: boolean;
  isLogin?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  hasSidebar = false,
  isLogin = false,
  component: Component,
  ...rest
}) => {
  const Layout = DefaultLayout;

  const { user } = useAuth();

  const signed = user;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate && isLogin) {
    return <Redirect to="/debit_consultation" />;
  }

  return (
    <RouteDOM
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={() => {
        // return isPrivate && signed ? (
        return isPrivate ? (
          hasSidebar ? (
            <Layout>
              <Component />
            </Layout>
          ):(
            <Wrapper>
              <BoxContainer>
                <Component />
              </BoxContainer>
            </Wrapper>
          )
        ) : (
          hasSidebar ? (
            <Layout>
              <Component />
            </Layout>
          ):(
            <Wrapper>
              <BoxContainer>
                <Component />
              </BoxContainer>
            </Wrapper>
          )
        );
      }}
    />
  );
};

export default Route;
