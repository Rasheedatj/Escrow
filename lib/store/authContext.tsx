import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, use, useEffect, useState } from 'react';

interface User {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

interface ContextType {
  user: null | User;
  isAuthenticated: boolean;
  logout: () => void;
  login: (user: User) => void;
  isLoading: boolean;
}

const initialState: ContextType = {
  user: null,
  isAuthenticated: false,
  logout: () => {},
  login: () => {},
  isLoading: true,
};

const AuthContext = createContext<ContextType>(initialState);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      const storedUser = await AsyncStorage.getItem('user');

      if (storedUser) setUser(JSON.parse(storedUser));

      setIsLoading(false);
    }
    fetchToken();
  }, []);

  const login = async (user: User) => {
    setUser(user);
    await AsyncStorage.setItem('user', JSON.stringify(user));
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = use(AuthContext);
  if (context === undefined)
    throw new Error('Auth context used outisde of scope');

  return context;
};
