import { appColors } from '@/lib/commonStyles';
import { RadioType } from '@/lib/types';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Radio = ({ label, value, setValue }: RadioType) => {
  const handleToggleValue = () => setValue((prev: boolean) => !prev);
  return (
    <Pressable onPress={handleToggleValue} style={styles.box}>
      <View style={[styles.checkBox, value && styles.checked]}>
        {value && <FontAwesome5 name='check' size={10} color='white' />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default Radio;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkBox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: appColors.primary500,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  checked: {
    backgroundColor: appColors.primary500,
  },

  label: {
    fontSize: 17,
    color: '#989898',
  },
});
