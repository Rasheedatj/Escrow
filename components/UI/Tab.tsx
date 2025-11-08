import { appColors } from '@/lib/commonStyles';
import { TabProp } from '@/lib/types';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Tab = ({ active, tabItems, setActive }: TabProp) => {
  return (
    <View style={styles.box}>
      {tabItems.map((item) => (
        <Pressable
          onPress={() => setActive(item.id)}
          style={[styles.item, active === item.id && styles.active]}
          key={item.id}
        >
          <Text style={[styles.text, active === item.id && styles.activeText]}>
            {item.title}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 8,
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#A9A9A92E',
    borderRadius: 4,
    flex: 1,
  },

  text: {
    fontSize: 15.21,
    fontWeight: 500,
    color: '#29292982',
    textAlign: 'center',
  },

  activeText: {
    color: appColors.primary500,
  },

  active: {
    borderBottomColor: appColors.primary500,
  },
});
