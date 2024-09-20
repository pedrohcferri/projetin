import axios from 'axios';

// Configuração base do Axios
const api = axios.create({
  baseURL: 'http://localhost:8800', // URL do backend
  timeout: 10000, // Tempo limite de requisição
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createUser = async (userData) => {
  
    try {
        await api.post('/users', userData);
        return 'Usuário criado com sucesso!';
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
    }
};