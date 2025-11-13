import { useMutation } from '@tanstack/react-query';
import { createUser, login } from './api';

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
