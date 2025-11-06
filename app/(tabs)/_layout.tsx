import EscrowIcon from '@/assets/images/Escrow';
import SettingsIcon from '@/assets/images/Settings';
import SwapIocn from '@/assets/images/Swap';
import { appColors } from '@/lib/commonStyles';
import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabLayout = () => {
  return (
    // <SafeAreaView style={{ flex: 1 }} edges={['top']}>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: appColors.grayText500,
        tabBarActiveTintColor: appColors.primary600,
        tabBarStyle: {
          paddingTop: 10,
        },
        sceneStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='Escrow'
        options={{
          title: 'Escrow',
          tabBarIcon: ({ color, size }) => <EscrowIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='Transactions'
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color, size }) => <SwapIocn color={color} />,
        }}
      />
      <Tabs.Screen
        name='Settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <SettingsIcon color={color} />,
        }}
      />
    </Tabs>
    // </SafeAreaView>
  );
};

export default TabLayout;
