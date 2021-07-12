import axios from 'axios';
import { API_URL, API_KEY, SERVER_URL } from '../constants';

export const newsClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

export const serverClient = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
});

export const getAllNewArticles = () =>
  newsClient({
    method: 'get',
    url: `everything?language=en&q=pokemon&sortBy=relevancy&pageSize=100&page=1&apiKey=${API_KEY}`,
  });

export const login = (data) =>
  serverClient({
    method: 'post',
    url: '/login',
    data,
  });
