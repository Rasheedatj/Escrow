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
          title: 'home',
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
