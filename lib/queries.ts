import { useMutation, useQuery } from '@tanstack/react-query';
import { createTransaction, createUser, getTransactions, login } from './api';
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
