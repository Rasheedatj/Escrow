import { transactionsTabs } from '@/data/UI';
import { TabTransactionsProps } from '@/lib/types';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Tab from '../UI/Tab';
import NewTransactionBtn from './NewTransactionBtn';
import TransactionItem from './TransactionItem';

const TabTransactions = ({
  escrowData,
  walletData,
  showBtn = false,
  isFlatList = true,
}: TabTransactionsProps) => {
  const [active, setActive] = useState('escrow');

  return (
    <>
      <Tab active={active} setActive={setActive} tabItems={transactionsTabs} />
      {showBtn && active === 'escrow' && <NewTransactionBtn />}

      {isFlatList ? (
        <FlatList
          data={active === 'escrow' ? escrowData : walletData}
          renderItem={(itemData) => (
            <TransactionItem transaction={itemData.item} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginBottom: 25 }}
        />
      ) : (
        <View style={{ marginBottom: 20 }}>
          {(active === 'escrow' ? escrowData : walletData).map((item) => {
            return <TransactionItem transaction={item} key={item.id} />;
          })}
        </View>
      )}
    </>
  );
};

export default TabTransactions;
