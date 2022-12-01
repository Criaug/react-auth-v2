import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { Usuario } from '../../types/Usuario';
import { useApi } from '../../hooks/useApi';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const api = useApi();

  useEffect(() => {
    const validaToken = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        const data = await api.validaToken(token);
        if (data.usuario) {
          setUsuario(data.usuario);
        }
      }
    };
    validaToken();
  }, [api]);

  const login = async (usuario: string, senha: string) => {
    const data = await api.login(usuario, senha);
    if (data.usuario && data.token) {
      setUsuario(data.usuario);
      localStorage.setItem('authToken', data.token);
      return true;
    }
    return false;
  };
  const logout = async () => {
    await api.logout();
    setUsuario(null);
    localStorage.setItem('authToken', '');
  };
  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
