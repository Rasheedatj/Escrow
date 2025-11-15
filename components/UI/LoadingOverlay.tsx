import { appColors } from '@/lib/commonStyles';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={appColors.primary500} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
