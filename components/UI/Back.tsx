import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

const Back = ({ style }: { style?: any }) => {
  const router = useRouter();

  const handleBack = () => router.back();
  return (
    <Pressable onPress={handleBack} style={style}>
      <Ionicons name='chevron-back' size={24} color={'black'} />
    </Pressable>
  );
};

export default Back;
