import { transactionsTabs } from '@/data/UI';
import { TabTransactionsProps } from '@/lib/types';
import React from 'react';
import { FlatList, View } from 'react-native';
import LoadingOverlay from '../UI/LoadingOverlay';
import Tab from '../UI/Tab';
import NewTransactionBtn from './NewTransactionBtn';
import TransactionItem from './TransactionItem';

const TabTransactions = ({
  data,
  isLoading,
  active,
  setActive,
  showBtn = false,
  isFlatList = true,
}: TabTransactionsProps) => {
  return (
    <>
      <Tab active={active} setActive={setActive} tabItems={transactionsTabs} />
      {showBtn && active === 'escrow' && <NewTransactionBtn />}

      {isLoading ? (
        <LoadingOverlay />
      ) : isFlatList ? (
        <FlatList
          data={data}
          renderItem={(itemData) => (
            <TransactionItem transaction={itemData.item} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginBottom: 25 }}
        />
      ) : (
        <View style={{ marginBottom: 20 }}>
          {data.map((item) => {
            return <TransactionItem transaction={item} key={item.id} />;
          })}
        </View>
      )}
    </>
  );
};

export default TabTransactions;
