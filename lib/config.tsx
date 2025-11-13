import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { QueryClient } from '@tanstack/react-query';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { appColors } from './commonStyles';

export const queryClient = new QueryClient();

export const toastConfig = {
  custom_success: ({ props }: { props: any }) => (
    <TouchableOpacity onPress={props.onPress} style={styles.toast}>
      {props.type === 'error' ? (
        <Ionicons
          name='close-circle-sharp'
          size={24}
          color={appColors.primary500}
        />
      ) : (
        <MaterialIcons
          name='check-circle'
          size={24}
          color={appColors.primary500}
        />
      )}
      <Text style={styles.toastText}>{props.message}</Text>
    </TouchableOpacity>
  ),
};

const styles = StyleSheet.create({
  toast: {
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
    // justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  toastText: {
    color: appColors.primary600,
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
    marginLeft: 10,
  },
});
