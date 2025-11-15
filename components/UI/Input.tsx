import { deviceWidth } from '@/lib/helpers';
import { InputType } from '@/lib/types';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

const Input = ({
  iconRight,
  iconLeft,
  placeholder,
  isPassword,
  label,
  style,
  autoCapitalize,
  autoCorrect = false,
  mode = 'flat',
  value,
  onChangeText,
  errorMessage,
}: InputType & TextInputProps) => {
  return (
    <View style={[styles.main, style]}>
      {label && (
        <Text style={[styles.label, errorMessage && styles.errorLabel]}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          errorMessage && styles.errorInputContainer,
          mode === 'transparent' && styles.transparent,
        ]}
      >
        {iconLeft && <View style={styles.left}>{iconLeft}</View>}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          style={styles.input}
          autoCorrect={autoCorrect}
          autoCapitalize={isPassword ? 'none' : autoCapitalize}
        />

        {iconRight && <View style={styles.right}>{iconRight}</View>}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  main: {
    marginBottom: deviceWidth > 400 ? 20 : 18,
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: '#0000001C',
    borderRadius: 9,
    paddingVertical: Platform.select({
      ios: deviceWidth > 400 ? 15 : 12,
      android: deviceWidth > 400 ? 4 : 2,
    }),
    paddingHorizontal: deviceWidth > 400 ? 16 : 12,
    backgroundColor: '#EEEEEE85',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  errorInputContainer: {
    borderColor: '#D32F2F',
  },

  transparent: {
    backgroundColor: 'transparent',
  },

  label: {
    paddingBottom: 10,
    color: '#707070A1',
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 17 : 14,
  },

  errorLabel: {
    color: '#D32F2F',
  },

  input: {
    color: '#5C5C5C',
    fontSize: deviceWidth > 400 ? 16 : 14,
    flex: 1,
  },

  left: {
    marginRight: 10,
  },

  right: {
    marginLeft: 10,
  },

  errorText: {
    color: '#D32F2F',
    paddingTop: 6,
    fontSize: 12,
  },
});
