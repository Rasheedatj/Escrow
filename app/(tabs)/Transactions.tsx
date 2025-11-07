import TabTransactions from '@/components/transactions/TabTransactions';
import PageTitle from '@/components/UI/PageTitle';
import { escrowTransactionData, walletTransactionData } from '@/data/UI';
import { globalStyles } from '@/lib/commonStyles';
import React from 'react';
import { View } from 'react-native';

const TransactionsScreen = () => {
  return (
    <View style={[globalStyles.rootContainer]}>
      <PageTitle>Transactions</PageTitle>
      <TabTransactions
        escrowData={escrowTransactionData}
        walletData={walletTransactionData}
      />
    </View>
  );
};

export default TransactionsScreen;
