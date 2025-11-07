import TabTransactions from '@/components/transactions/TabTransactions';
import { escrowTransactionData, walletTransactionData } from '@/data/UI';
import React from 'react';
import { View } from 'react-native';

const TransactionsScreen = () => {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <TabTransactions
        escrowData={escrowTransactionData}
        walletData={walletTransactionData}
        showBtn={true}
      />
    </View>
  );
};

export default TransactionsScreen;
