import { InputType } from '@/lib/types';
import React from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({
  icon,
  placeholder,
  isPassword,
  iconPosition = 'right',
  label,
  style,
}: InputType) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        {icon && iconPosition === 'left' && icon}

        <TextInput
          placeholder={placeholder}
          autoCapitalize='none'
          secureTextEntry={isPassword}
          style={[
            styles.input,
            iconPosition === 'left' && styles.left,
            iconPosition === 'right' && styles.right,
          ]}
        />
        {icon && iconPosition === 'right' && icon}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#0000001C',
    borderRadius: 9,
    paddingVertical: Platform.OS === 'ios' ? 15 : 4,
    paddingHorizontal: 16,
    backgroundColor: '#EEEEEE85',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    paddingBottom: 10,
    color: '#707070A1',
    fontWeight: 500,
    fontSize: 17,
  },

  input: {
    color: '#5C5C5C',
    fontSize: 16,
    flex: 1,
  },

  left: {
    marginLeft: 10,
  },
  right: {
    marginRight: 10,
  },
});
