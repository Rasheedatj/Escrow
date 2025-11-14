import { transactionsTabs } from '@/data/UI';
import { TabTransactionsProps } from '@/lib/types';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Tab from '../UI/Tab';
import NewTransactionBtn from './NewTransactionBtn';
import TransactionItem from './TransactionItem';

const TabTransactions = ({
  escrowData,
  walletData,
  showBtn = false,
}: TabTransactionsProps) => {
  const [active, setActive] = useState('escrow');

  return (
    <>
      <Tab active={active} setActive={setActive} tabItems={transactionsTabs} />
      {showBtn && active === 'escrow' && <NewTransactionBtn />}
      <FlatList
        data={active === 'escrow' ? escrowData : walletData}
        renderItem={(itemData) => (
          <TransactionItem transaction={itemData.item} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 100 }}
      />
    </>
  );
};

export default TabTransactions;
