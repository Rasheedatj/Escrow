import Button from '@/components/UI/Button';
import { onboardingData } from '@/data/UI';
import { appColors } from '@/lib/commonStyles';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OnboardingScreen = () => {
  const [active, setActive] = useState('onb-1');
  const router = useRouter();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setActive('onb-2');
    }, 5000);

    return () => clearTimeout(timeOutId);
  }, [active]);

  const handleGoToLogin = () => router.push('/(auth)/Login');
  const handleGoToSignUp = () => router.push('/(auth)/SignUp');

  const activeItem = onboardingData.find((item) => item.id === active);
  return (
    <View>
      <View style={styles.imageContainer}>{activeItem?.image}</View>

      <View style={styles.scrollContainer}>
        <View
          style={[
            styles.scrollItem,
            activeItem?.id === 'onb-1' && styles.activeScrollItem,
          ]}
        ></View>
        <View
          style={[
            styles.scrollItem,
            activeItem?.id === 'onb-2' && styles.activeScrollItem,
          ]}
        ></View>
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>{activeItem?.title}</Text>
        <Text style={styles.description}>{activeItem?.description}</Text>

        <View>
          <Button style={styles.button} mode='flat' onPress={handleGoToLogin}>
            Login
          </Button>
          <Button style={styles.button} onPress={handleGoToSignUp}>
            Create Account
          </Button>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },

  scrollItem: {
    width: 30,
    height: 10,
    borderWidth: 1,
    borderColor: appColors.primary500,
    marginRight: 10,
    borderRadius: 6,
  },

  activeScrollItem: {
    backgroundColor: appColors.primary500,
    width: 50,
  },

  details: {
    paddingTop: 20,
  },

  title: {
    fontWeight: 600,
    fontSize: 25.42,
    color: appColors.black,
    lineHeight: 36,
  },

  description: {
    fontSize: 19.57,
    paddingTop: 8,
    color: appColors.grayText300,
    lineHeight: 28,
    marginBottom: 30,
  },

  button: {
    marginBottom: 10,
  },
});
