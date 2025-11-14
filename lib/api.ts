import axios from 'axios';
import { CreateUserProps, LoginProps } from './types';

const API_KEY = 'AIzaSyBi33yF4IGhgHzzljkiIyALkmQ2QbqyxR0';

export const login = async ({
  email,
  password,
  returnSecureToken,
}: LoginProps) => {
  try {
    const res = await axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        API_KEY,
      {
        email,
        password,
        returnSecureToken,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async ({
  email,
  password,
  returnSecureToken,
}: CreateUserProps) => {
  try {
    const res = await axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        API_KEY,
      {
        email,
        password,
        returnSecureToken,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
