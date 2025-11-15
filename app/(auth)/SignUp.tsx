import Logo from '@/assets/images/Logo';
import PasswordVisibilityToggle from '@/components/PasswordVisibilityToggle';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { appColors } from '@/lib/commonStyles';
import { deviceWidth } from '@/lib/helpers';
import { useCreateUser } from '@/lib/queries';
import { SignUpFormData, signUpSchema } from '@/lib/schema';
import { useAuth } from '@/lib/store/authContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const { createUserMutation, isPending } = useCreateUser();
  const { login } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    const { email, password } = data;
    await createUserMutation(
      { email, password, returnSecureToken: true },
      {
        onSuccess: (data) => {
          login(data);
          // router.push('/(auth)/AllSet');
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

  const handleToggle = (type: 'password' | 'confirmPassword') =>
    setShowPassword((cur) => {
      return {
        ...cur,
        [type]: !cur[type],
      };
    });

  return (
    <ScrollView
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      style={styles.root}
    >
      <Logo />

      <View>
        <Text style={styles.title}>Create your account</Text>
      </View>

      <View>
        <Controller
          name='name'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label='Full Name'
              placeholder='e.g John Doe'
              style={styles.input}
              autoCapitalize='words'
              value={value}
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          name='email'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label='Email'
              placeholder='e.g John@doe.com'
              style={styles.input}
              keyboardType={'email-address'}
              autoCapitalize='none'
              value={value}
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label='Password'
              placeholder='*********'
              isPassword={!showPassword.password}
              iconRight={
                <PasswordVisibilityToggle
                  show={showPassword.password}
                  onPress={() => handleToggle('password')}
                />
              }
              style={styles.input}
              value={value}
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Controller
          name='confirmPassword'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label='Confirm Password'
              placeholder='*********'
              isPassword={!showPassword.confirmPassword}
              iconRight={
                <PasswordVisibilityToggle
                  show={showPassword.confirmPassword}
                  onPress={() => handleToggle('confirmPassword')}
                />
              }
              style={styles.input}
              value={value}
              onChangeText={onChange}
              errorMessage={errors.confirmPassword?.message}
            />
          )}
        />

        <Button
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
          isLoading={isPending}
        >
          {isPending ? 'Creating user...' : ' Create Account'}
        </Button>

        <Text style={styles.description}>
          Already have an account?{' '}
          <Link href={'/(auth)/Login'} style={styles.link}>
            Log in
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    marginTop: deviceWidth > 400 ? 30 : 0,
    marginBottom: 10,
  },

  title: {
    fontSize: deviceWidth > 400 ? 32.91 : 26,
    color: appColors.black,
    fontWeight: 500,
    paddingBottom: 10,
    marginTop: deviceWidth > 400 ? 45 : 30,
    marginBottom: 20,
  },

  description: {
    color: '#A8A8A8',
    fontSize: deviceWidth > 400 ? 17 : 14,
    paddingTop: 10,
    textAlign: 'center',
  },

  link: {
    color: appColors.primary500,
    fontWeight: 500,
  },

  input: {
    marginBottom: deviceWidth > 400 ? 24 : 18,
  },

  button: {
    marginTop: deviceWidth > 400 ? 20 : 10,
  },
});
