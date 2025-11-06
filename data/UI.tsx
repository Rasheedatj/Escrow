import HomeScreen1 from '@/assets/images/HomeScreen1';
import HomeScreen2 from '@/assets/images/HomeScreen2';
import { OnboardingItem } from '@/lib/types';

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
