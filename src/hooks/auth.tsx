import React, { createContext, useCallback, useState, useContext } from 'react';

import { useHistory } from 'react-router-dom';
import api from '../services/api';
import { useToast } from './toast';

interface User {
  _id: string;
  code: string;
  name: string;
  email: string;
  password: string;
  cashback: number;
  birthdate: string;
  cpf: string;
  // eslint-disable-next-line camelcase
  created_at: string;
  // eslint-disable-next-line camelcase
  updated_at: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();
  const history = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@VPOnline:token');
    const user = localStorage.getItem('@VPOnline:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password }) => {
      try {
        const response = await api.post('sessions', { email, password });

        const { token, user } = response.data;

        localStorage.setItem('@VPOnline:token', token);
        localStorage.setItem('@VPOnline:user', JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user });
        addToast({
          type: 'success',
          title: 'Ótimo',
          description: 'Login realizado com sucesso'
        });
        history.goBack();
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Ops',
          description: err.response.data.msg
        });
      }
    },
    [history, addToast]
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@VPOnline:token');
    localStorage.removeItem('@VPOnline:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
