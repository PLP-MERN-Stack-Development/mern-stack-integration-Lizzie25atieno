// client/src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { authService } from '../services/api';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, []);

  // login function
  const login = async (credentials) => {
    const data = await authService.login(credentials);
    setUser(data.user);
  };

  // logout function
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  // Return everything from the hook
  return { user, setUser, login, logout };
}
