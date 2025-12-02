import User from '@/assets/images/User';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import PageTitle from '@/components/UI/PageTitle';
import { appColors } from '@/lib/commonStyles';
import { deviceWidth, formatCurrency } from '@/lib/helpers';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewTransactionScreen = () => {
  const [stage, setStage] = useState<'tag' | 'form'>('tag');

  return (
    <View style={styles.flex}>
      <PageTitle hasBackButton={true}>New Escrow</PageTitle>
      <View style={[styles.body]}>
        {stage === 'tag' ? (
          <View style={styles.form}>
            <Input
              label='Enter User Tag'
              placeholder="Enter other party's tag"
            />
            <View style={styles.button}>
              <Button onPress={() => setStage('form')}>Done</Button>
            </View>
          </View>
        ) : (
          <View style={styles.flex}>
            <View style={styles.summary}>
              <User />
              <View style={styles.article}>
                <Text style={styles.title}>Ambibola David</Text>
                <Text style={styles.description}>Tag32Gbex</Text>
              </View>
            </View>

            <View style={styles.form}>
              <Input
                label='Item(s)'
                placeholder='Enter items'
                style={styles.input}
              />
              <Input
                label='Amount'
                placeholder='Enter amount'
                style={styles.input}
                rightLabel={
                  <Text style={styles.sideLabel}>
                    Bal: {formatCurrency(50300)}
                  </Text>
                }
              />
              <Input
                label='Delivery Date'
                placeholder='Pick a date'
                style={styles.input}
              />
              <View>
                <Text style={styles.label}>Attach signed doc (optional)</Text>
                <View style={styles.selectDoc}>
                  <View style={styles.selectedText}>
                    <Text style={styles.fileTitle}>
                      Attach a file or image for evidence
                    </Text>
                    <Text style={styles.format}>
                      Accepted file type: JPEG, PNG, and PDF
                    </Text>
                    <Text style={styles.size}>Size limit: 3MB</Text>
                  </View>
                  <View style={styles.icon}>
                    <AntDesign name='plus' color='white' size={24} />
                  </View>
                </View>
              </View>
              <Button>Confirm Transaction</Button>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default NewTransactionScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  button: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  summary: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: appColors.primary100,
    borderRadius: 14,
    padding: 12,
    backgroundColor: appColors.primary50,
    marginVertical: 20,
  },

  article: {
    flex: 1,
    marginHorizontal: 14,
  },

  title: {
    paddingBottom: 4,
    fontSize: deviceWidth > 400 ? 16 : 14,
    color: '#2E2F31',
    fontWeight: 500,
  },

  description: {
    color: '#2E2F318A',
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 14 : 13,
  },

  form: {
    marginVertical: 20,
    flex: 1,
  },

  input: {
    marginBottom: 30,
  },

  label: {
    paddingBottom: 10,
    color: '#707070A1',
    fontWeight: 500,
    fontSize: deviceWidth > 400 ? 17 : 14,
  },

  sideLabel: {
    fontWeight: 500,
    color: appColors.primary500,
    fontSize: 17,
  },

  selectedText: {
    flex: 1,
  },

  selectDoc: {
    borderColor: '#076CECA8',
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dashed',
    padding: 15,
    flexDirection: 'row',
    marginBottom: 40,
    marginTop: 10,
    backgroundColor: '#D9D9D926',
    alignItems: 'center',
  },

  fileTitle: {
    color: appColors.primary500,
    fontWeight: 500,
    fontSize: 16,
  },

  format: {
    color: '#00000057',
    fontSize: 14,
    paddingVertical: 5,
  },

  size: {
    fontSize: 13,
    color: '#00000057',
  },

  icon: {
    width: 37,
    height: 37,
    borderRadius: 37 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.primary500,
  },
});
