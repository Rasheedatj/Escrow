import Logo from '@/assets/images/Logo';
import PasswordVisibilityToggle from '@/components/PasswordVisibilityToggle';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { appColors } from '@/lib/commonStyles';
import { useCreateUser } from '@/lib/queries';
import { SignUpFormData, signUpSchema } from '@/lib/schema';
import { useAuth } from '@/lib/store/authContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

const SignUpScreen = () => {
  const router = useRouter();
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
        <Text style={styles.description}>
          Already have an account?{' '}
          <Link href={'/(auth)/Login'} style={styles.link}>
            Log in
          </Link>
        </Text>
      </View>

      <View>
        <Controller
          name='name'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label='Full Name'
              placeholder='e.g John Doe'
              style={{ marginBottom: 24 }}
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
              style={{ marginBottom: 24 }}
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
              style={{ marginBottom: 24 }}
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
              style={{ marginBottom: 24 }}
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
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

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
    marginBottom: 40,
  },

  link: {
    color: appColors.primary500,
    fontWeight: 500,
  },

  button: {
    marginTop: 20,
  },
});
