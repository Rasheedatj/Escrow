import Address from '@/assets/images/Address';
import Bank from '@/assets/images/Bank';
import Face from '@/assets/images/Face';
import HomeScreen1 from '@/assets/images/HomeScreen1';
import HomeScreen2 from '@/assets/images/HomeScreen2';
import Key from '@/assets/images/Key';
import Lock from '@/assets/images/Lock';
import Logout from '@/assets/images/Logout';
import Support from '@/assets/images/Support';
import {
  OnboardingItem,
  ProfileItem,
  TabItem,
  TransactionItem,
  VerificationItem,
} from '@/lib/types';

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

export const walletTransactionData: TransactionItem[] = [
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

export const escrowTransactionData: TransactionItem[] = [
  {
    id: 'e1',
    type: 'deposit',
    amount: 25000,
    time: '2025-11-06T10:45:00Z',
    userTag: 'Tag32Gb6',
    userAvatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    description: 'Funds deposited for web development project milestone 1.',
  },
  {
    id: 'e2',
    type: 'withdraw',
    amount: 10000,
    time: '2025-11-05T15:20:00Z',
    userTag: 'Tag32Gb6',
    userAvatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    description: 'Payment released to vendor for completed milestone.',
  },
  {
    id: 'e3',
    type: 'deposit',
    amount: 5000,
    time: '2025-11-04T08:55:00Z',
    userTag: 'Tag32Gb6',
    userAvatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    description: 'Client funded escrow for logo design project.',
  },
  {
    id: 'e4',
    type: 'withdraw',
    amount: 5000,
    time: '2025-11-03T11:10:00Z',
    userTag: 'Tag32Gb6',
    userAvatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    description: 'Refund processed after project cancellation.',
  },
  {
    id: 'e5',
    type: 'deposit',
    amount: 15000,
    time: '2025-11-02T16:30:00Z',
    userTag: 'Tag32Gb6',
    userAvatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    description: 'Additional funds added to ongoing escrow agreement.',
  },
  {
    id: 'e6',
    type: 'withdraw',
    amount: 7000,
    time: '2025-11-01T09:25:00Z',
    userTag: 'Tag32Gb6',
    userAvatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    description: 'Partial payout to vendor for phase completion.',
  },
];

export const profile: ProfileItem[] = [
  {
    icon: <Bank />,
    title: 'Account Settings',
    description: 'Add/remove account details',
  },
  {
    icon: <Lock />,
    title: 'Change Password',
    description: 'Change your password',
  },
  {
    icon: <Key />,
    title: 'Change Pin',
    description: 'Change Your Pin',
  },
  {
    icon: <Support />,
    title: 'Help & Support',
    description: 'Contact help & support',
  },
  {
    icon: <Logout />,
    title: 'Log Out',
    description: 'Log out of your account',
  },
];

export const transactionsTabs: TabItem[] = [
  {
    id: 'escrow',
    title: 'Escrow Transactions',
  },
  {
    id: 'wallet',
    title: 'Wallet Transactions',
  },
];
