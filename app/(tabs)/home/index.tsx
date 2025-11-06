import { globalStyles } from '@/lib/commonStyles';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={globalStyles.rootContainer}>
      <Text>Home</Text>
      <Link href={'/(tabs)/home/Transactions'}>Transactions</Link>
    </View>
  );
};

export default HomeScreen;
