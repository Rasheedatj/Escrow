import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface OnboardingItem {
  id: string;
  image: ReactNode;
  title: string;
  description: string;
}

export interface VerificationItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ButtonType {
  onPress?: () => void;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  style?: any;
  mode?: 'transparent' | 'flat' | 'white';
  isLoading?: boolean;
}

export interface InputType {
  label?: string;
  isPassword?: boolean;
  iconLeft?: ReactNode;
  iconRight?: any;
  style?: any;
  mode?: 'flat' | 'transparent';
  errorMessage?: string | undefined;
}

export interface RadioType {
  label: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<any>>;
}

export interface TransactionItem {
  id: string;
  amount: number;
  time: string;
  description: string;
  type?: 'withdraw' | 'deposit';
  title?: string;
  userTag?: string;
  userAvatar?: string;
}

export interface TabProp {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  tabItems: TabItem[];
}

export interface TabItem {
  id: string;
  title: string;
}

export interface ProfileItem {
  icon: ReactNode;
  title: string;
  description: string;
  onPress?: () => void;
}

export interface IconButtonProps {
  children: ReactNode;
  mode?: 'flat';
  onPress?: () => void;
}

export interface TabTransactionsProps {
  data: TransactionItem[];
  isLoading: boolean;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  showBtn?: boolean;
  isFlatList?: boolean;
}

export interface PageTitleProp {
  children: ReactNode;
  headerRight?: React.JSX.Element;
  hasBackButton?: boolean;
}

export interface SummaryItemProp {
  icon: ReactNode;
  title: string;
  details: string;
  style?: any;
}

export interface ProgressProp {
  isCompleted: boolean;
  title: string;
  details: string;
  id: string;
}

export interface ShowProps {
  show: boolean;
  onPress: () => void;
}

export interface LoginProps {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface CreateUserProps {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface CreateTransactionProp {
  newTransaction: TransactionItem;
  token: string;
  type: 'escrowTransactions' | 'walletTransactions';
}

export interface GetTransactions {
  token: string;
  type: 'escrowTransactions' | 'walletTransactions';
}
