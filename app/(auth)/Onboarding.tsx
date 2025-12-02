import Button from '@/components/UI/Button';
import { onboardingData } from '@/data/UI';
import { appColors } from '@/lib/commonStyles';
import { deviceHeight, deviceWidth } from '@/lib/helpers';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OnboardingScreen = () => {
  const [active, setActive] = useState('onb-1');
  const router = useRouter();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setActive('onb-2');
    }, 7000);

    return () => clearTimeout(timeOutId);
  }, [active]);

  const handleGoToLogin = () => router.push('/(auth)/Login');
  const handleGoToSignUp = () => router.push('/(auth)/SignUp');

  const activeItem = onboardingData.find((item) => item.id === active);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageContainer}>{activeItem?.image}</View>

      <View>
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
    paddingTop: deviceHeight > 900 ? 60 : 20,
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
    paddingTop: deviceWidth > 400 ? 20 : 16,
  },

  title: {
    fontWeight: 600,
    fontSize: deviceWidth > 400 ? 25.42 : 18,
    color: appColors.black,
    lineHeight: deviceWidth > 400 ? 36 : 28,
  },

  description: {
    fontSize: deviceWidth > 400 ? 19.57 : 15,
    paddingTop: deviceWidth > 400 ? 8 : 4,
    color: appColors.grayText300,
    lineHeight: deviceWidth > 400 ? 28 : 22,
    marginBottom: deviceWidth > 400 ? 30 : 15,
  },

  button: {
    marginBottom: deviceWidth > 400 ? 10 : 0,
  },
});
