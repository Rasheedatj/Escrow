import Address from '@/assets/images/Address';
import Bank from '@/assets/images/Bank';
import Face from '@/assets/images/Face';
import HomeScreen1 from '@/assets/images/HomeScreen1';
import HomeScreen2 from '@/assets/images/HomeScreen2';
import { OnboardingItem, TransactionItem, VerificationItem } from '@/lib/types';

export const onboardingData: OnboardingItem[] = [
  {
    id: 'onb-1',
    image: <HomeScreen1 />,
    title: 'Protect your funds for online transactions.',
    description:
      'Confidently buy & sell  online without the concerns of potential scams. ',
  },
  {
    id: 'onb-2',
    image: <HomeScreen2 />,
    title: 'Enjoy frictionless transactions with other users.',
    description:
      'Simplify exchanges, build trust, connect securely and transact effortlessly. ',
  },
];

export const verificationData: VerificationItem[] = [
  {
    icon: <Bank />,
    title: 'Bank verification number (BVN)',
    description: 'You can dial the short code (*565*0#)',
  },
  {
    icon: <Face color='#076CEC' />,
    title: 'Face verification',
    description: 'Ensure to have a clear background',
  },
  {
    icon: <Address />,
    title: 'Residential address',
    description: 'Provide the address of where you live',
  },
];

export const transactionData: TransactionItem[] = [
  {
    id: 't1',
    type: 'deposit',
    amount: 5000,
    time: '2025-11-06T08:30:00Z',
    title: 'Salary Deposit',
    description: 'November salary credited from Acme Corp.',
  },
  {
    id: 't2',
    type: 'withdraw',
    amount: 1200,
    time: '2025-11-06T12:15:00Z',
    title: 'ATM Withdrawal',
    description: 'Cash withdrawn from GTBank ATM, Lagos.',
  },
  {
    id: 't3',
    type: 'deposit',
    amount: 2000,
    time: '2025-11-05T17:45:00Z',
    title: 'Freelance Payment',
    description: 'Payment received from Upwork client.',
  },
  {
    id: 't4',
    type: 'withdraw',
    amount: 750,
    time: '2025-11-04T09:10:00Z',
    title: 'Airtime Purchase',
    description: 'Airtime top-up for 0903****211.',
  },
  {
    id: 't5',
    type: 'deposit',
    amount: 10000,
    time: '2025-11-03T14:25:00Z',
    title: 'Business Transfer',
    description: 'Funds transferred from business account.',
  },
  {
    id: 't6',
    type: 'withdraw',
    amount: 300,
    time: '2025-11-02T10:05:00Z',
    title: 'Electricity Bill',
    description: 'Prepaid power recharge via app.',
  },
  {
    id: 't7',
    type: 'deposit',
    amount: 1500,
    time: '2025-11-01T18:40:00Z',
    title: 'Refund',
    description: 'Refund from cancelled order on Jumia.',
  },
];
