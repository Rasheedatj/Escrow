import TabTransactions from '@/components/transactions/TabTransactions';
import { escrowTransactionData, walletTransactionData } from '@/data/UI';
import { globalStyles } from '@/lib/commonStyles';
import React from 'react';
import { Text, View } from 'react-native';

const TransactionsScreen = () => {
  return (
    <View style={[globalStyles.rootContainer]}>
      <Text style={globalStyles.pageTitle}>Transactions</Text>
      <TabTransactions
        escrowData={escrowTransactionData}
        walletData={walletTransactionData}
      />
    </View>
  );
};

export default TransactionsScreen;
