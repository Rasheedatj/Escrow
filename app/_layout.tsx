import { queryClient, toastConfig } from '@/lib/config';
import AuthProvider, { useAuth } from '@/lib/store/authContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { Slot, Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

function AuthStack() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'ios' ? 'none' : 'slide_from_right',
      }}
    >
      <Stack.Screen name='(auth)' />
    </Stack>
  );
}

function ProtectedStack() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'ios' ? 'none' : 'slide_from_right',
      }}
    >
      <Stack.Screen name='(tabs)' />
      <Stack.Screen
        name='NewTransaction'
        options={{
          title: 'New Escrow',
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack>
  );
}

SplashScreen.preventAutoHideAsync();

function AuthRedirectController() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (!segments.length) return;

    const isAuthRoute = segments[0] === '(auth)';

    if (!user && !isAuthRoute) {
      router.replace('/(auth)/Onboarding');
    } else if (user && isAuthRoute) {
      router.replace('/(tabs)/home');
    }
  }, [user, segments, router]);

  useEffect(() => {
    async function hideSplash() {
      if (!isLoading) await SplashScreen.hideAsync();
    }

    hideSplash();
  }, [isLoading]);

  if (isLoading) return null;
  return <Slot />;
}

export default function RootLayout() {
  const segments = useSegments();
  const currentScreen = segments[segments.length - 1];
  const Container = currentScreen === 'AllSet' ? View : SafeAreaView;

  return (
    <Container style={{ flex: 1, backgroundColor: 'white' }} edges={['top']}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AuthRedirectController />
        </AuthProvider>
      </QueryClientProvider>
      <Toast config={toastConfig} visibilityTime={5000} />
    </Container>
  );
}
