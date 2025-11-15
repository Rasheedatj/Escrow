import { appColors } from '@/lib/commonStyles';
import { deviceWidth } from '@/lib/helpers';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import NewTransactionBtn from '../transactions/NewTransactionBtn';

const Transactions = () => {
  const router = useRouter();
  return (
    <View>
      <NewTransactionBtn />

      <View style={styles.header}>
        <Text style={styles.transactionTitle}>Transactions</Text>

        <Pressable
          style={({ pressed }) => [
            styles.detailsBtn,
            pressed && styles.pressed,
          ]}
          onPress={() => router.push('/(tabs)/Transactions')}
        >
          <Text style={styles.detailsText}>See all</Text>
          <Ionicons
            name='chevron-forward'
            size={20}
            color={appColors.primary500}
          />
        </Pressable>
      </View>

      {/* <TabTransactions
        escrowData={escrowTransactionData.slice(0, 3)}
        walletData={walletTransactionData.slice(0, 3)}
        isFlatList={false}
      /> */}
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  detailsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  transactionTitle: {
    color: '#292929',
    fontSize: deviceWidth > 400 ? 18 : 16,
    fontWeight: 500,
  },

  detailsText: {
    paddingRight: 6,
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 15.7 : 14,
    color: appColors.primary500,
  },

  pressed: {
    opacity: 0.85,
  },
});
