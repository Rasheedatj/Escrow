import Button from '@/components/UI/Button';
import { appColors, globalStyles } from '@/lib/commonStyles';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AllSetScreen = () => {
  const router = useRouter();

  const handleNavigate = () => router.push('/(auth)/Verify');
  return (
    <>
      <SafeAreaView style={[styles.root, globalStyles.rootContainer]}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={appColors.primary500}
        />
        <View>
          <View style={styles.titleBox}>
            <FontAwesome6 name='check-circle' size={32} color='white' />
            <Text style={styles.title}>You are all set</Text>
            <Text style={styles.detail}>
              You can now proceed to your account
            </Text>
          </View>

          <Button mode='white' style={styles.button} onPress={handleNavigate}>
            Proceed to dashboard
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AllSetScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: appColors.primary500,
    paddingTop: 200,
  },

  button: {
    borderRadius: 50,
  },

  titleBox: {
    height: 450,
    alignItems: 'center',
  },

  title: {
    color: appColors.white,
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
  },

  detail: {
    textAlign: 'center',
    paddingTop: 8,
    fontSize: 16,
    color: appColors.white,
    opacity: 0.78,
  },
});
