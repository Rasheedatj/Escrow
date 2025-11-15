import { deviceWidth } from '@/lib/helpers';
import { SummaryItemProp } from '@/lib/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SummaryItem = ({ icon, title, details, style }: SummaryItemProp) => {
  return (
    <View style={[styles.box, style]}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>{details}</Text>
    </View>
  );
};

export default SummaryItem;

const styles = StyleSheet.create({
  box: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  icon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B8AEE2B',
  },

  title: {
    color: '#979797',
    fontSize: deviceWidth > 400 ? 17 : 15,
    flex: 1,
    marginHorizontal: 13,
  },

  details: {
    textAlign: 'right',
    color: '#595959',
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 15 : 13,
  },
});
