import { appColors } from '@/lib/commonStyles';
import { deviceWidth } from '@/lib/helpers';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Tag = ({ openBanner }: { openBanner: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.copyText}>Tag32Gb6</Text>
      <Pressable onPress={openBanner} style={styles.copy}>
        <Text style={styles.copyText}>Copy Tag</Text>
        <Ionicons
          name='copy-outline'
          size={deviceWidth > 400 ? 24 : 18}
          color={appColors.primary500}
        />
      </Pressable>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CECECE70',
  },

  tagText: {},

  copy: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  copyText: {
    color: appColors.primary500,
    marginRight: 10,
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 16.8 : 14,
  },
});
