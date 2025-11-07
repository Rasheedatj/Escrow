import User from '@/assets/images/User';
import SettingItem from '@/components/SettingItem';
import PageTitle from '@/components/UI/PageTitle';
import { profile } from '@/data/UI';
import { globalStyles } from '@/lib/commonStyles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const SettingsScreen = () => {
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
          <SettingItem key={item.title} profile={item} />
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
    fontSize: 15.64,
    fontWeight: 500,
    paddingBottom: 5,
    color: '#2E2F31',
  },
  profileDescription: {
    color: '#2E2F318A',
    fontWeight: 500,
    fontSize: 13.05,
  },
});
