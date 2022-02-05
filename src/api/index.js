import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export function login(credentials) {
  return api.post('/login', credentials);
}

export function signup(credentials) {
  return api.post('/signup', credentials);
}

export function logout() {
  return api.post('/logout');
}

export function isLoggedIn() {
  return api.get('/login');
}
