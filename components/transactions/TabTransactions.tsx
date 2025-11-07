import { transactionsTabs } from '@/data/UI';
import { appColors } from '@/lib/commonStyles';
import { TabTransactionsProps } from '@/lib/types';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Button from '../UI/Button';
import Tab from '../UI/Tab';
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
      {showBtn && active === 'escrow' && (
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
          style={{ marginVertical: 6 }}
        >
          New Escrow Transaction
        </Button>
      )}
      <View style={{ paddingBottom: 100 }}>
        <FlatList
          data={active === 'escrow' ? escrowData : walletData}
          renderItem={(itemData) => (
            <TransactionItem transaction={itemData.item} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          //   style={{ height: 1000 }}
          // alwaysBounceVertical={false}
        />
      </View>
    </>
  );
};

export default TabTransactions;
