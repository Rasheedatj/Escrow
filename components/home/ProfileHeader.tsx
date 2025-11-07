import Notifications from '@/assets/images/Notifications';
import User from '@/assets/images/User';
import { globalStyles } from '@/lib/commonStyles';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.header}>
      <User />
      <View style={styles.article}>
        <Text style={[globalStyles.description, { marginBottom: 0 }]}>
          Hello,
        </Text>
        <Text style={styles.title}> Olaoluwa Abijo</Text>
      </View>
      <View style={styles.icons}>
        <AntDesign name='scan' size={24} color='black' style={styles.icon} />
        <Notifications />
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  article: {
    flex: 1,
    marginHorizontal: 13,
  },

  icon: {
    marginRight: 10,
  },

  title: {
    fontSize: 15.78,
    color: '#000000',
    fontWeight: 600,
    paddingTop: 4,
  },
});
