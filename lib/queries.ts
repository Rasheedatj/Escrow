import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createTransaction,
  createUser,
  getTransactions,
  getUser,
  login,
} from './api';
import { useAuth } from './store/authContext';
import { GetTransactions } from './types';

export const useLogin = () => {
  const { mutateAsync: loginMutation, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  });

  return { loginMutation, isPending };
};

export const useCreateUser = () => {
  const { mutateAsync: createUserMutation, isPending } = useMutation({
    mutationKey: ['create-user'],
    mutationFn: createUser,
  });

  return { createUserMutation, isPending };
};

export const useGetUser = () => {
  const { user } = useAuth();

  const { data: userProfile, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser({ localId: user?.localId!, token: user?.idToken! }),
  });

  return { userProfile, isLoading };
};

export const useAddTransaction = () => {
  const { mutate: createTransactionMutation, isPending } = useMutation({
    mutationFn: createTransaction,
  });

  return { createTransactionMutation, isPending };
};

export const useGetTransactions = ({ token, type }: GetTransactions) => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: [type],
    queryFn: () => getTransactions({ token, type }),
  });

  return { transactions, isLoading };
};
