import { Dimensions } from 'react-native';

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export const deviceWidth = Dimensions.get('screen').width;
