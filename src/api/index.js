import axios from 'axios';
import { API_URL, API_KEY, SERVER_URL } from '../constants';

export const newsClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'X-Api-Key': API_KEY,
  },
});

export const serverClient = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
  headers: {
    'X-Api-Key': API_KEY,
  },
});

export const getAllNewArticles = (queryString) =>
  newsClient({
    method: 'get',
    url: queryString,
  });

export const login = (data) =>
  serverClient({
    method: 'post',
    url: '/login',
    data,
  });
