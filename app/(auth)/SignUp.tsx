import Logo from '@/assets/images/Logo';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { appColors } from '@/lib/commonStyles';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SignUpScreen = () => {
  const router = useRouter();

  const handleCreateAccount = () => router.push('/(auth)/AllSet');
  return (
    <View style={styles.root}>
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
        <Input
          label='Full Name'
          placeholder='e.g John Doe'
          style={{ marginBottom: 24 }}
        />
        <Input
          label='Email'
          placeholder='e.g John@doe.com'
          style={{ marginBottom: 24 }}
        />
        <Input
          label='Password'
          placeholder='*********'
          isPassword={true}
          icon={<Ionicons name='eye' size={24} color={'#494848'} />}
          style={{ marginBottom: 24 }}
        />
        <Input
          label='Confirm Password'
          placeholder='*********'
          isPassword={true}
          icon={<Ionicons name='eye' size={24} color='#494848' />}
          style={{ marginBottom: 24 }}
        />

        <Button style={styles.button} onPress={handleCreateAccount}>
          Create Account
        </Button>
      </View>
    </View>
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
