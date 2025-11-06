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
