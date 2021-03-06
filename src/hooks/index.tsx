import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { CartProvider } from './cart';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  </ToastProvider>
);

export default AppProvider;
