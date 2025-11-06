import Face from '@/assets/images/Face';
import Logo from '@/assets/images/Logo';
import Button from '@/components/UI/Button';
import Radio from '@/components/UI/Radio';
import { appColors } from '@/lib/commonStyles';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = () => {
  const router = useRouter();
  const [remember, setRemember] = useState(false);

  const handleLogin = () => router.push('/(tabs)/home');
  return (
    <View style={styles.root}>
      <Logo />

      <View>
        <Text style={styles.title}>Log in to your account</Text>
        <Text style={styles.description}>
          Don&apos;t have an account?{' '}
          <Link href={'/(auth)/SignUp'} style={styles.link}>
            Create account
          </Link>
        </Text>
      </View>

      <View>
        <Pressable
          style={({ pressed }) => [styles.formItem, pressed && styles.pressed]}
        >
          <Ionicons name='mail-outline' size={24} color={appColors.border} />
          <TextInput style={styles.input} placeholder='Email address' />
        </Pressable>

        <View style={styles.password}>
          <Pressable
            style={({ pressed }) => [
              styles.formItem,
              { flex: 1 },
              pressed && styles.pressed,
            ]}
          >
            <Feather name='lock' size={24} color={appColors.border} />
            <TextInput
              style={styles.input}
              placeholder='Password'
              secureTextEntry
            />
            <AntDesign
              name='eye-invisible'
              size={24}
              color={appColors.border}
            />
          </Pressable>

          <View style={styles.face}>
            <Face color='#2C2828' />
          </View>
        </View>

        <View style={styles.footer}>
          <Radio label='Remember me' value={remember} setValue={setRemember} />

          <Text style={styles.forgot}>Forgot password?</Text>
        </View>
        <Button onPress={handleLogin}>Log In</Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
  },

  title: {
    fontSize: 32.91,
    color: appColors.black,
    fontWeight: 500,
    paddingBottom: 10,
    marginTop: 45,
  },

  description: {
    color: '#A8A8A8',
    fontSize: 17,
    marginBottom: 30,
  },

  link: {
    color: appColors.primary500,
    fontWeight: 500,
  },

  remember: {
    fontSize: 17,
    color: '#989898',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 20,
  },

  forgot: {
    color: appColors.primary500,
    textDecorationColor: appColors.primary500,
    textDecorationStyle: 'solid',
    fontSize: 17,
    textDecorationLine: 'underline',
  },

  formItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: appColors.border,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 25,
  },

  pressed: {
    borderColor: appColors.primary500,
  },

  input: {
    marginHorizontal: 8,
    height: 40,
    flex: 1,
  },

  password: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  face: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#CFCFCF33',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    marginLeft: 10,
  },
});
