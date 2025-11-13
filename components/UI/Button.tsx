import { appColors } from '@/lib/commonStyles';
import { ButtonType } from '@/lib/types';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Button = ({
  onPress,
  children,
  style,
  mode,
  icon,
  iconPosition = 'left',
  isLoading = false,
}: ButtonType) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.pressed,
        isLoading && styles.disabled,
        style,
      ]}
      disabled={isLoading}
    >
      <View style={[styles.innerContainer, mode && styles[`${mode}`]]}>
        <View style={styles.iconLeft}>
          {icon && !isLoading && iconPosition === 'left' && icon}
        </View>

        {isLoading && (
          <ActivityIndicator color='white' style={{ marginRight: 8 }} />
        )}

        <Text style={[styles.buttonText, mode && styles[`${mode}Text`]]}>
          {children}
        </Text>

        <View style={styles.iconRight}>
          {icon && !isLoading && iconPosition === 'right' && icon}
        </View>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.85,
  },

  disabled: {
    opacity: 0.8,
  },

  innerContainer: {
    backgroundColor: appColors.primary500,
    margin: 4,
    padding: 12,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 16,
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

  iconLeft: {
    marginRight: 6,
  },

  iconRight: {
    marginLeft: 6,
  },
});
