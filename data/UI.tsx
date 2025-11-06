import Address from '@/assets/images/Address';
import Bank from '@/assets/images/Bank';
import Face from '@/assets/images/Face';
import HomeScreen1 from '@/assets/images/HomeScreen1';
import HomeScreen2 from '@/assets/images/HomeScreen2';
import { OnboardingItem, VerificationItem } from '@/lib/types';

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
