import TransactionItem from '@/components/transactions/TransactionItem';
import PageTitle from '@/components/UI/PageTitle';
import { escrowTransactionData } from '@/data/UI';
import { appColors, globalStyles } from '@/lib/commonStyles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const EscrowScreen = () => {
  const router = useRouter();
  const headerRight = () => {
    return (
      <View style={styles.header}>
        <Pressable onPress={() => router.push('/NewTransaction')}>
          <Ionicons name='add' color={appColors.primary500} size={26} />
        </Pressable>
        <View style={styles.filter}>
          <Text style={styles.filterText}>Filter</Text>
          <Ionicons name='filter' size={24} color={'#3B8AEE'} />
        </View>
      </View>
    );
  };
  return (
    <View style={globalStyles.rootContainer}>
      <PageTitle headerRight={headerRight()}>Escrow</PageTitle>

      <Text style={styles.title}>Recent Transactions</Text>

      <FlatList
        data={escrowTransactionData}
        renderItem={(itemData) => (
          <Pressable
            onPress={() => router.push(`/(tabs)/Escrow/${itemData.item.id}`)}
          >
            <TransactionItem transaction={itemData.item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default EscrowScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  filter: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    backgroundColor: '#3B8AEE29',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },

  filterText: {
    color: '#3B8AEE',
    fontSize: 17,
    fontWeight: 500,
    marginRight: 6,
  },

  title: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 18.06,
    fontWeight: 500,
    color: '#292929',
  },
});
