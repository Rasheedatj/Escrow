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
      <Stack.Screen
        name='AllSet'
        options={{
          contentStyle: {
            // backgroundColor: appColors.primary500,
          },
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
