import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import PageTitle from '@/components/UI/PageTitle';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const NewTransactionScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <PageTitle hasBackButton={true}>New Escrow</PageTitle>
      <View style={[styles.body]}>
        <View style={styles.form}>
          <Input label='Enter User Tag' placeholder="Enter other party's tag" />
        </View>

        <Button style={styles.button}>Done</Button>
      </View>
    </View>
  );
};

export default NewTransactionScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  form: {
    flex: 7,
  },

  button: {
    flex: 1,
  },
});
