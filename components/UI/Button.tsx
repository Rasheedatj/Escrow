import { appColors } from '@/lib/commonStyles';
import { ButtonType } from '@/lib/types';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Button = ({ onPress, children, style, mode }: ButtonType) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <View style={[styles.innerContainer, mode && styles[`${mode}`], style]}>
        <Text style={[styles.buttonText, mode && styles[`${mode}Text`]]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.85,
  },

  innerContainer: {
    backgroundColor: appColors.primary500,
    margin: 4,
    padding: 14,
    borderRadius: 8,
  },

  flat: {
    backgroundColor: '#D7D7D7A1',
  },

  white: {
    backgroundColor: appColors.white,
  },

  transparent: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: appColors.primary500,
  },

  buttonText: {
    color: appColors.white,
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 18,
  },

  flatText: {
    color: '#707070',
  },
  whiteText: {
    color: appColors.primary500,
  },

  transparentText: {
    color: appColors.primary500,
  },
});
