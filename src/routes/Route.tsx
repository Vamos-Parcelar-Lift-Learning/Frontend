import React from 'react';
import {
  RouteProps as RouteDOMProps,
  Route as RouteDOM,
  Switch,
  Redirect
} from 'react-router-dom';
import { isMatch } from 'date-fns/esm';
import DefaultLayout from '../pages/DefaultLayout';
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
        return isPrivate ? (
          hasSidebar ? (
            <Layout>
              <Component />
            </Layout>
          ) : (
            <Component />
          )
        ) : hasSidebar ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Component />
        );
      }}
    />
  );
};

export default Route;
