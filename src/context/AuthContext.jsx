import React from 'react';
import { login, signup, logout, isLoggedIn } from '../api';

function getSessionUser() {
  const rawUser = sessionStorage.getItem('user');
  return rawUser ? JSON.parse(rawUser) : null;
}

function removeUser() {
  sessionStorage.removeItem('user');
}
function saveSessionUser(user) {
  sessionStorage.setItem('user', JSON.stringify(user));
}

export const AuthCtx = React.createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState({ user: getSessionUser() });

  const handleLogin = async credentials => {
    try {
      const { data } = await login(credentials);
      saveSessionUser(data);
      setAuth({ user: data });
    } catch (error) {
      setAuth({ user: null });
    }
  };

  const handleSignup = async credentials => {
    try {
      const { data } = await signup(credentials);
    } catch (error) {
      setAuth({ user: null });
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      removeUser();
    } catch (error) {
    } finally {
      setAuth({ user: null });
    }
  };

  const handleIsLoggedIn = async () => {
    try {
      if (!auth.user) {
        const { data } = await isLoggedIn();
        setAuth({ user: data });
        saveSessionUser(data);
      }
    } catch (error) {
      setAuth({ user: null });
    }
  };

  React.useEffect(() => {
    handleIsLoggedIn();
  }, []);

  return (
    <AuthCtx.Provider
      value={{ ...auth, handleLogin, handleLogout, handleSignup }}
    >
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthCtx);
}

export default AuthProvider;
