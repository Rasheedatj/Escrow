import { Stack, useSegments } from 'expo-router';
import { Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const segments = useSegments();
  const currentScreen = segments[segments.length - 1];
  const Container = currentScreen === 'AllSet' ? View : SafeAreaView;

  return (
    <Container style={{ flex: 1, backgroundColor: 'white' }} edges={['top']}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: Platform.OS === 'ios' ? 'none' : 'slide_from_right',
        }}
      >
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='(auth)' />
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
    </Container>
  );
}
