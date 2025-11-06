import { globalStyles } from '@/lib/commonStyles';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const EscrowScreen = () => {
  return (
    <View style={globalStyles.rootContainer}>
      <Text>Escrow</Text>
      <Link href={'/(tabs)/Escrow/Summary'}>Summary</Link>
    </View>
  );
};

export default EscrowScreen;
