import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const TransactionsScreen = () => {
  return (
    <View>
      <Text>Transaction</Text>
      <Link href='/(tabs)/home/NewEscrow'>New Escrow</Link>
    </View>
  );
};

export default TransactionsScreen;
