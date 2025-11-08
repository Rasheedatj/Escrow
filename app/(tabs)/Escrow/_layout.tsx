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
          headerShown: false,
          headerTintColor: '#000000B5',
          // presentation: 'modal',
        }}
      />
    </Stack>
  );
};

export default EscrowLayout;
