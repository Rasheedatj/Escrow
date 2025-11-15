import { appColors } from '@/lib/commonStyles';
import { deviceWidth } from '@/lib/helpers';
import { TransactionItem as TransactionItemProp } from '@/lib/types';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const TransactionItem = ({
  transaction,
}: {
  transaction: TransactionItemProp;
}) => {
  const { amount, description, time, type, title, userTag, userAvatar } =
    transaction;
  function formatTime(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }
  return (
    <View style={styles.container}>
      {userTag ? (
        <View style={[styles.icon]}>
          <Image source={{ uri: userAvatar }} style={styles.icon} />
        </View>
      ) : (
        <View
          style={[
            styles.icon,
            type === 'withdraw' ? styles.withdraw : styles.deposit,
          ]}
        >
          {type === 'withdraw' ? (
            <Feather name='upload' size={24} color='white' />
          ) : (
            <Feather name='download' size={24} color='white' />
          )}
        </View>
      )}

      <View style={styles.article}>
        <Text style={styles.title}>{userTag ? userTag : title}</Text>
        <Text style={styles.description}>{description.slice(0, 30)}...</Text>
      </View>

      <View style={styles.last}>
        <Text style={styles.amount}> ${amount}</Text>
        <Text style={styles.time}>{formatTime(time)}</Text>
      </View>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#D9D9D999',
  },
  icon: {
    width: deviceWidth > 400 ? 47 : 40,
    height: deviceWidth > 400 ? 47 : 40,
    borderRadius: (deviceWidth > 400 ? 47 : 40) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  withdraw: {
    backgroundColor: appColors.success,
  },
  deposit: {
    backgroundColor: appColors.danger500,
  },

  article: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    paddingBottom: deviceWidth > 400 ? 6 : 4,
    fontSize: deviceWidth > 400 ? 16 : 14,
    color: '#2E2F31',
    fontWeight: 500,
  },

  description: {
    color: '#2E2F318A',
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 14 : 12,
  },

  last: {
    maxWidth: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  amount: {
    textAlign: 'left',
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 16.8 : 14,
    color: '#2E2F31',
    paddingBottom: 3,
  },

  time: {
    textAlign: 'left',
    fontSize: deviceWidth > 400 ? 13 : 12,
    color: '#2E2F318A',
  },
});
