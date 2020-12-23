import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface Bill {
  code: string;
  name: string;
  description: string;
  issuer: string;
  // expiration_date: string;
  amount: number;
}

interface Locator {
    code: string;
    bills: Bill[];
}

interface CartContextData {
  locator: Locator;
  getLocator: (locatorId: string) => Promise<void>;
  bills: Bill[];
  setBills: React.Dispatch<React.SetStateAction<Bill[]>>;
  addBill: (item: Bill) => void;
  removeBill: (item: Bill) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [locator, setLocator] = useState<Locator>({} as Locator);
  const [bills, setBills] = useState<Bill[]>([]);

  const getLocator = useCallback(async locatorId => {
    const response = await api.get(`locators/${locatorId}`);
    setLocator(response.data);
  }, []);

  const addBill = useCallback((item)=>{
    setBills(prevState=> ([...prevState, item]))
  }, []);

  const removeBill = useCallback((item)=>{
    const newArray = bills.filter(bill=> bill.code !== item.code);
    setBills(newArray)
  }, [bills])

  return (
    <CartContext.Provider
      value={{
        locator,
        getLocator,
        setBills,
        bills,
        addBill,
        removeBill
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
