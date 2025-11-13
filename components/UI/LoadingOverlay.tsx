import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color='white' />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
