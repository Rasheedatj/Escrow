import { escrowTransactionData, walletTransactionData } from '@/data/UI';
import { appColors } from '@/lib/commonStyles';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Button from '../UI/Button';
import TabTransactions from '../transactions/TabTransactions';

const Transactions = () => {
  const router = useRouter();
  return (
    <View>
      <Button
        icon={
          <FontAwesome
            name='long-arrow-right'
            size={24}
            color={appColors.primary500}
            style={{ marginLeft: 10 }}
          />
        }
        iconPosition='right'
        mode='transparent'
      >
        New Escrow Transaction
      </Button>

      <View style={styles.header}>
        <Text style={styles.transactionTitle}>Transactions</Text>

        <Pressable
          style={({ pressed }) => [
            styles.detailsBtn,
            pressed && styles.pressed,
          ]}
          onPress={() => router.push('/(tabs)/home/Transactions')}
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
        escrowData={escrowTransactionData.slice(0, 3)}
        walletData={walletTransactionData.slice(0, 3)}
        showBtn={true}
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
    fontSize: 18,
    fontWeight: 500,
  },

  detailsText: {
    paddingRight: 6,
    fontWeight: 500,
    fontSize: 15.7,
    color: appColors.primary500,
  },

  pressed: {
    opacity: 0.85,
  },
});
