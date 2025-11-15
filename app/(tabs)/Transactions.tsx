import TabTransactions from '@/components/transactions/TabTransactions';
import PageTitle from '@/components/UI/PageTitle';
import { globalStyles } from '@/lib/commonStyles';
import { useGetTransactions } from '@/lib/queries';
import { useAuth } from '@/lib/store/authContext';
import React, { useState } from 'react';
import { View } from 'react-native';

const TransactionsScreen = () => {
  const [active, setActive] = useState('escrow');
  const { user } = useAuth();

  const { transactions, isLoading } = useGetTransactions({
    token: user?.idToken!,
    type: `${active}Transactions` as
      | 'escrowTransactions'
      | 'walletTransactions',
  });

  return (
    <View style={[globalStyles.rootContainer]}>
      <PageTitle>Transactions</PageTitle>
      <View style={{ flex: 1 }}>
        <TabTransactions
          data={isLoading || !transactions ? [] : transactions}
          isLoading={isLoading}
          showBtn={true}
          active={active}
          setActive={setActive}
        />
      </View>
    </View>
  );
};

export default TransactionsScreen;
