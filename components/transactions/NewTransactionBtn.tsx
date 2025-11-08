import { appColors } from '@/lib/commonStyles';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import Button from '../UI/Button';

const NewTransactionBtn = () => {
  const router = useRouter();
  const handlePress = () => router.push('/NewTransaction');
  return (
    <Button
      icon={
        <FontAwesome
          name='long-arrow-right'
          size={24}
          color={appColors.primary500}
          style={{ marginLeft: 10 }}
        />
      }
      iconPosition='right'
      mode='transparent'
      onPress={handlePress}
    >
      New Escrow Transaction
    </Button>
  );
};

export default NewTransactionBtn;
