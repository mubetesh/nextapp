import axios from 'axios';

export const login = async (email: string, password: string) => {
  // Simulate login API
  return axios.post('/api/auth/login', { email, password });
};

export const register = async (email: string, password: string) => {
  // Simulate register API
  return axios.post('/api/auth/register', { email, password });
};
