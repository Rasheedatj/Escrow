import Bank from '@/assets/images/Bank';
import Key from '@/assets/images/Key';
import Lock from '@/assets/images/Lock';
import Logout from '@/assets/images/Logout';
import Support from '@/assets/images/Support';
import User from '@/assets/images/User';
import SettingItem from '@/components/SettingItem';
import PageTitle from '@/components/UI/PageTitle';
import { globalStyles } from '@/lib/commonStyles';
import { deviceWidth } from '@/lib/helpers';
import { useAuth } from '@/lib/store/authContext';
import { ProfileItem } from '@/lib/types';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const SettingsScreen = () => {
  const { logout } = useAuth();
  const profile: ProfileItem[] = [
    {
      icon: <Bank />,
      title: 'Account Settings',
      description: 'Add/remove account details',
    },
    {
      icon: <Lock />,
      title: 'Change Password',
      description: 'Change your password',
    },
    {
      icon: <Key />,
      title: 'Change Pin',
      description: 'Change Your Pin',
    },
    {
      icon: <Support />,
      title: 'Help & Support',
      description: 'Contact help & support',
    },
    {
      icon: <Logout />,
      title: 'Log Out',
      description: 'Log out of your account',
      onPress: logout,
    },
  ];

  return (
    <View style={globalStyles.rootContainer}>
      <PageTitle>Settings</PageTitle>
      <View style={styles.profile}>
        <User />
        <View style={styles.article}>
          <Text style={styles.profileTitle}>My Profile</Text>
          <Text style={styles.profileDescription}>View your profile</Text>
        </View>
        <Ionicons name='chevron-forward' size={20} color='#707070' />
      </View>

      <ScrollView>
        {profile.map((item) => (
          <SettingItem key={item.title} profile={item} onPress={item.onPress} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  root: {},

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D999',
    marginTop: 40,
  },

  article: {
    flex: 1,
    marginHorizontal: 14,
  },

  profileTitle: {
    fontSize: deviceWidth > 400 ? 15.64 : 14,
    fontWeight: 500,
    paddingBottom: deviceWidth > 400 ? 5 : 3,
    color: '#2E2F31',
  },
  profileDescription: {
    color: '#2E2F318A',
    fontWeight: 500,
    fontSize: 13.05,
  },
});
