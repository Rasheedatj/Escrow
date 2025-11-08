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
}

export interface InputType {
  placeholder: string;
  label?: string;
  isPassword?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  style?: any;
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
}

export interface IconButtonProps {
  children: ReactNode;
  mode?: 'flat';
  onPress?: () => void;
}

export interface TabTransactionsProps {
  escrowData: TransactionItem[];
  walletData: TransactionItem[];
  showBtn?: boolean;
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
