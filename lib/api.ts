import axios from 'axios';
import { api } from './axios';
import {
  CreateTransactionProp,
  CreateUserProps,
  GetTransactions,
  GetUserProp,
  LoginProps,
  TransactionItem,
  UserProfileProp,
} from './types';
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

export const createUserProfile = async ({
  uid,
  profileData,
  token,
}: UserProfileProp) => {
  try {
    await axios.put(
      `https://expense-tracker-3e6da-default-rtdb.firebaseio.com/users/${uid}.json?auth=${token}`,
      profileData
    );
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

    await createUserProfile({
      uid: res.data.localId,
      token: res.data.idToken,
      profileData: {
        walletBalance: 0,
        escrowBalance: 0,
        name: 'Tester',
        email,
        tag: '32Gb6',
      },
    });

    return res.data;
  } catch (error: any) {
    throw error;
  }
};

export const getUser = async ({ localId, token }: GetUserProp) => {
  try {
    const res = await axios.get(
      `https://expense-tracker-3e6da-default-rtdb.firebaseio.com/users/${localId}.json?auth=${token}`
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};
export const createTransaction = async ({
  newTransaction,
  token,
  type,
}: CreateTransactionProp) => {
  try {
    return await axios.post(
      `https://expense-tracker-3e6da-default-rtdb.firebaseio.com/${type}.json?auth=${token}`,
      newTransaction
    );
  } catch (error) {
    throw error;
  }
};

export const getTransactions = async ({ type, token }: GetTransactions) => {
  try {
    const res = await api.get(
      `https://expense-tracker-3e6da-default-rtdb.firebaseio.com/${type}.json?auth=${token}`
    );
    const transactions = [];

    for (const key in res.data) {
      const transactionObj: TransactionItem = {
        id: key,
        amount: res.data[key].amount,
        time: res.data[key].time,
        description: res.data[key].description,
        type: res.data[key].type,
        title: res.data[key].title,
        userTag: res.data[key].userTag,
        userAvatar: res.data[key].userAvatar,
      };
      transactions.push(transactionObj);
    }

    return transactions;
  } catch (error) {
    throw error;
  }
};
