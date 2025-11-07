import { appColors } from '@/lib/commonStyles';
import { IconButtonProps } from '@/lib/types';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

const IconButton = ({ children, onPress, mode }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, mode && styles[mode]]}
    >
      {children}
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    backgroundColor: appColors.primary500,
    margin: 4,
  },

  flat: {
    backgroundColor: '#E8E8E8',
  },
});
