import axios from 'axios';

const BASE_URL = 'https://openmarket.weniv.co.kr';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});


