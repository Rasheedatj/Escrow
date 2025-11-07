import { Stack } from 'expo-router';
import React from 'react';

const EscrowLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Escrow',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='[EscrowId]'
        options={{
          title: 'Transaction Summary',
          headerTintColor: '#000000B5',
        }}
      />
    </Stack>
  );
};

export default EscrowLayout;
