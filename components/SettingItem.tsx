import { appColors } from '@/lib/commonStyles';
import { ProfileItem } from '@/lib/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SettingItem = ({ profile }: { profile: ProfileItem }) => {
  const { title, description, icon } = profile;
  return (
    <View style={styles.container}>
      <View style={[styles.icon, title === 'Log Out' && styles.logout]}>
        {icon}
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
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

  icon: {
    width: 47,
    height: 47,
    borderRadius: 47 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.primary100,
    marginRight: 20,
  },

  title: {
    paddingBottom: 7,
    fontSize: 16,
    color: '#2E2F31',
    fontWeight: 500,
  },

  description: {
    color: '#2E2F318A',
    fontWeight: 500,
    fontSize: 13.05,
  },
});
