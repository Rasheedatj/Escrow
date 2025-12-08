import { appColors } from '@/lib/commonStyles';
import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'card',
        animation: 'ios_from_left',
        sheetCornerRadius: 0,
        contentStyle: {
          backgroundColor: appColors.white,
          padding: 16,
        },
      }}
    >
      <Stack.Screen name='Login' options={{ sheetCornerRadius: 0 }} />
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
