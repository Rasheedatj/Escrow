import { Stack, useSegments } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const segments = useSegments();
  const currentScreen = segments[segments.length - 1];
  const Container = currentScreen === 'AllSet' ? View : SafeAreaView;

  return (
    <Container style={{ flex: 1 }} edges={['top']}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='(auth)' />
      </Stack>
    </Container>
  );
}
