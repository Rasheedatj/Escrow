import { appColors } from '@/lib/commonStyles';
import { Stack } from 'expo-router';
import React from 'react';

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: appColors.white,
        },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Transactions'
        options={{
          headerTintColor: '#000000B5',
        }}
      />
      <Stack.Screen
        name='NewEscrow'
        options={{
          title: 'New Escrow',
          headerTintColor: '#000000B5',
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
