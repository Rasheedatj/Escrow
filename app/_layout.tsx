import { appColors } from '@/lib/commonStyles';
import { Stack, useSegments } from 'expo-router';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const toastConfig = {
  custom_success: ({ props }: { props: any }) => (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: '90%',
        marginTop: 20,
        backgroundColor: appColors.primary50,
        borderColor: appColors.primary100,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Text
        style={{
          color: appColors.primary600,
          fontSize: 15,
          fontWeight: '600',
        }}
      >
        {props.message}
      </Text>
    </TouchableOpacity>
  ),
};

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
      <Toast config={toastConfig} visibilityTime={3000} />
    </Container>
  );
}
