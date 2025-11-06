import VeryfyId from '@/assets/images/VeryfyId';
import Back from '@/components/UI/Back';
import Button from '@/components/UI/Button';
import { verificationData } from '@/data/UI';
import { appColors, globalStyles } from '@/lib/commonStyles';
import { useRouter } from 'expo-router';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const VerifyScreen = () => {
  const router = useRouter();

  const handleSkip = () => router.push('/(tabs)/home');
  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <View style={styles.root}>
        <Back style={styles.back} />
        <VeryfyId />

        <View>
          <Text style={[globalStyles.title, styles.title]}>
            Let&apos;s verify your ID
          </Text>
          <Text style={globalStyles.description}>
            In accordance with{' '}
            <Text style={styles.underline}>CBN regulations</Text> for compliance
            and documentation, you will need to provide the following:
          </Text>
        </View>
        <View style={styles.box}>
          {verificationData.map((item, index) => (
            <View
              key={item.title}
              style={[styles.item, index === 1 && styles.border]}
            >
              <View style={styles.icon}>{item.icon}</View>
              <View>
                <Text style={styles.boxTitle}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View>
          <Button style={styles.button}>Proceed</Button>
          <Button style={styles.button} mode='transparent' onPress={handleSkip}>
            Skip for now
          </Button>
        </View>
      </View>
    </>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
  },

  back: {
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    marginTop: 25,
  },

  underline: {
    textDecorationLine: 'underline',
    paddingBottom: 2,
  },

  box: {
    borderWidth: 1,
    borderColor: appColors.primary100,
    backgroundColor: appColors.primary50,
    borderRadius: 10,
    marginBottom: 60,
    padding: 10,
  },

  button: {
    borderRadius: 50,
    marginBottom: 15,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },

  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.primary100,
    marginRight: 10,
  },

  boxTitle: {
    color: appColors.primary500,
    fontWeight: 500,
    paddingBottom: 6,
  },

  description: {
    fontSize: 16,
    color: '#9D9D9D',
  },

  border: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D1D1D170',
  },
});
