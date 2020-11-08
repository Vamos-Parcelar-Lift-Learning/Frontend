import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface Locator {
  code: string;
  bills: {
    code: string;
    name: string;
    description: string;
    issuer: string;
    // expiration_date: string;
    amonut: number;
  }[];
}

interface CartContextData {
  locator: Locator;
  getLocator: (locatorId: string) => Promise<void>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [locator, setLocator] = useState<Locator>({} as Locator);

  const getLocator = useCallback(async locatorId => {
    const response = await api.get(`locators/${locatorId}`);
    setLocator(response.data);
  }, []);

  return (
    <CartContext.Provider
      value={{
        locator,
        getLocator,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

export { CartProvider, useCart };
