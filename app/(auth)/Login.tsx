import Face from '@/assets/images/Face';
import Logo from '@/assets/images/Logo';
import PasswordVisibilityToggle from '@/components/PasswordVisibilityToggle';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Radio from '@/components/UI/Radio';
import { appColors } from '@/lib/commonStyles';
import { useLogin } from '@/lib/queries';
import { LoginFormData, loginSchema } from '@/lib/schema';
import { useAuth } from '@/lib/store/authContext';
import { Feather, Ionicons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {
  const router = useRouter();
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { loginMutation, isPending } = useLogin();
  const { login } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const { email, password } = data;
    // email jane@doe.com | john@doe.com | john@doe2.com
    // password: Password21
    await loginMutation(
      { email, password, returnSecureToken: true },
      {
        onSuccess: (data) => {
          login(data);
          Toast.show({
            type: 'custom_success',
            props: {
              message: 'Welcome back!',
              type: 'success',
            },
          });
          router.push('/(tabs)/home');
        },
        onError: (error: any) => {
          Toast.show({
            type: 'custom_success',
            props: {
              message: error.response.data.error.message,
              type: 'error',
            },
          });
        },
      }
    );
  };

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
        <Controller
          name='email'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Enter address'
              value={value}
              onChangeText={onChange}
              iconLeft={
                <Ionicons
                  name='mail-outline'
                  size={24}
                  color={appColors.border}
                />
              }
              mode='transparent'
              autoCapitalize='none'
              keyboardType={'email-address'}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={styles.password}>
              <Input
                placeholder='Password'
                value={value}
                onChangeText={onChange}
                iconLeft={
                  <Feather name='lock' size={24} color={appColors.border} />
                }
                iconRight={
                  <PasswordVisibilityToggle
                    show={showPassword}
                    onPress={() => setShowPassword((s) => !s)}
                  />
                }
                isPassword={!showPassword}
                mode='transparent'
                style={styles.passwordInput}
                errorMessage={errors.password?.message}
              />

              <View style={styles.face}>
                <Face color='#2C2828' />
              </View>
            </View>
          )}
        />

        <View style={styles.footer}>
          <Radio label='Remember me' value={remember} setValue={setRemember} />

          <Text style={styles.forgot}>Forgot password?</Text>
        </View>
        <Button onPress={handleSubmit(onSubmit)} isLoading={isPending}>
          {isPending ? 'Logging In...' : 'Log In'}
        </Button>
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

  password: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  passwordInput: {
    flex: 1,
    marginBottom: 0,
  },

  face: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#CFCFCF33',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});
