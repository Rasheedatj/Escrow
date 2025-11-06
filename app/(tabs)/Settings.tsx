import { globalStyles } from '@/lib/commonStyles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={globalStyles.rootContainer}>
      <Text style={globalStyles.pageTitle}>Settings</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  root: {},
});
