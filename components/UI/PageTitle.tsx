import { PageTitleProp } from '@/lib/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PageTitle = ({ children, headerRight }: PageTitleProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
      {headerRight}
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#CECECE70',
    paddingBottom: 10,
  },
  title: {
    fontSize: 27,
    color: '#000000C9',
    fontWeight: 600,
  },
});
