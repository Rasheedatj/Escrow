import { appColors } from '@/lib/commonStyles';
import { deviceWidth } from '@/lib/helpers';
import { useGetTransactions } from '@/lib/queries';
import { useAuth } from '@/lib/store/authContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import NewTransactionBtn from '../transactions/NewTransactionBtn';
import TabTransactions from '../transactions/TabTransactions';

const Transactions = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [active, setActive] = useState('escrow');

  const { transactions, isLoading } = useGetTransactions({
    type: `${active}Transactions` as
      | 'escrowTransactions'
      | 'walletTransactions',
    token: user?.idToken!,
  });
  return (
    <View style={{ flex: 1 }}>
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

      <TabTransactions
        data={isLoading || !transactions ? [] : transactions?.slice(0, 3)}
        isLoading={isLoading}
        active={active}
        setActive={setActive}
        isFlatList={false}
      />
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
