import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validaToken: async (token: string) => {
    return {
      usuario: { id: 2, nome: 'Cristian' },
    };
    //const response = await api.post('/validaToken', { token });
    // return response.data;
  },
  login: async (usuario: string, senha: string) => {
    return {
      usuario: { id: 2, nome: 'Cristian' },
      token: 'aijsdoiajsdioasjdoiajsoidj',
    };
    // const response = await api.post('/login', { usuario, senha });

    //return response.data;
  },
  logout: async () => {
    return { status: true };
    // const response = await api.post('/logout');
    // return response.data;
  },
});
