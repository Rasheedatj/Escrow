import TransactionItem from '@/components/transactions/TransactionItem';
import Tab from '@/components/UI/Tab';
import { escrowTransactionData, walletTransactionData } from '@/data/UI';
import { globalStyles } from '@/lib/commonStyles';
import { TabItem } from '@/lib/types';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const Tabs: TabItem[] = [
  {
    id: 'escrow',
    title: 'Escrow Transactions',
  },
  {
    id: 'wallet',
    title: 'Wallet Transactions',
  },
];

const TransactionsScreen = () => {
  const [active, setActive] = useState('escrow');
  return (
    <View style={[globalStyles.rootContainer]}>
      <Text style={globalStyles.pageTitle}>Transactions</Text>
      <Tab active={active} setActive={setActive} tabItems={Tabs} />
      <FlatList
        data={
          active === 'escrow' ? escrowTransactionData : walletTransactionData
        }
        renderItem={(itemData) => (
          <TransactionItem transaction={itemData.item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TransactionsScreen;
