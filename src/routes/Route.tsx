import React from 'react';
import {
  RouteProps as RouteDOMProps,
  Route as RouteDOM,
  // Redirect,
} from 'react-router-dom';
import DefaultLayout from '../pages/DefaultLayout';

interface RouteProps extends RouteDOMProps {
  isPrivate?: boolean;
  hasSidebar?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  // eslint-disable-next-line react/prop-types
  isPrivate = false,
  hasSidebar = false,
  // eslint-disable-next-line react/prop-types
  component: Component,
  ...rest
}) => {
  const Layout = DefaultLayout;

  // const signed = false; // Pegar token de Login do Context API
  // if (!signed && isPrivate) {
  //   return <Redirect to="/" />;
  // }
  // if (signed && !isPrivate) {
  //   return <Redirect to="/debit_consultation" />;
  // }

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
            <Component />
          )
        ) : (
          hasSidebar ? (

            <Component />

          ):(
            <Component />
          )
        );
      }}
    />
  );
};

export default Route;
