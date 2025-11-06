import { appColors } from '@/lib/commonStyles';
import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: appColors.white,
          padding: 16,
        },
      }}
    >
      <Stack.Screen name='Login' />
      <Stack.Screen name='SignUp' />
      <Stack.Screen name='Verify' />
      <Stack.Screen name='Onboarding' />
      <Stack.Screen
        name='AllSet'
        options={{
          contentStyle: {
            padding: 0,
          },
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
