import EscrowIcon from '@/assets/images/Escrow';
import EscrowFilled from '@/assets/images/EscrowFilled';
import HomeFilled from '@/assets/images/HomeFilled';
import SettingsIcon from '@/assets/images/Settings';
import SettingsFilled from '@/assets/images/SettingsFilled';
import SwapIocn from '@/assets/images/Swap';
import { appColors } from '@/lib/commonStyles';
import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';

const TabLayout = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
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
          name='home'
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <HomeFilled />
              ) : (
                <Feather name='home' size={size} color={color} />
              ),
          }}
        />
        <Tabs.Screen
          name='Escrow'
          options={{
            title: 'Escrow',
            tabBarIcon: ({ color, size, focused }) =>
              focused ? <EscrowFilled /> : <EscrowIcon color={color} />,
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
            tabBarIcon: ({ color, focused }) =>
              focused ? <SettingsFilled /> : <SettingsIcon color={color} />,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
