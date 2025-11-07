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
  type: 'withdraw' | 'deposit';
  amount: number;
  time: string;
  title: string;
  description: string;
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
