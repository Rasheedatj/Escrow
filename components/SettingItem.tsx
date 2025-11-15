import { appColors } from '@/lib/commonStyles';
import { deviceWidth } from '@/lib/helpers';
import { ProfileItem } from '@/lib/types';
import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

const SettingItem = ({
  profile,
  onPress,
}: {
  profile: ProfileItem;
  onPress?: () => void;
}) => {
  const { title, description, icon } = profile;
  const handlePress = () => {
    Alert.alert('Confirm action', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: onPress,
      },
    ]);
  };
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={[styles.icon, title === 'Log Out' && styles.logout]}>
        {icon}
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D999',
  },

  logout: {
    backgroundColor: appColors.danger100,
  },

  pressed: {
    opacity: 0.85,
    backgroundColor: '#faf7f799',
  },

  icon: {
    width: deviceWidth > 400 ? 47 : 40,
    height: deviceWidth > 400 ? 47 : 40,
    borderRadius: 47 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.primary100,
    marginRight: 20,
  },

  title: {
    paddingBottom: deviceWidth > 400 ? 7 : 4,
    fontSize: deviceWidth > 400 ? 16 : 14,
    color: '#2E2F31',
    fontWeight: 500,
  },

  description: {
    color: '#2E2F318A',
    fontWeight: 500,
    fontSize: 13.05,
  },
});
