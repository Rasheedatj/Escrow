import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://expense-tracker-3e6da-default-rtdb.firebaseio.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
