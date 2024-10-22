import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/login';

const login = async (username, password) => {
  const res = await axios.post(API_URL, { username, password });
  if (res.data.token) {
    localStorage.setItem('token', res.data.token);
  }
  return res.data;
};

const logout = () => {
  localStorage.removeItem('token');
};

export { login, logout };
