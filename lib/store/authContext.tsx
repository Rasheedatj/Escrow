import { createContext, ReactNode, use, useState } from 'react';

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
}

const initialState: ContextType = {
  user: null,
  isAuthenticated: false,
  logout: () => {},
  login: () => {},
};

const AuthContext = createContext<ContextType>(initialState);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
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
