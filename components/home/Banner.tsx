import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Banner = ({ onClose }: { onClose: () => void }) => {
  return (
    <View style={styles.box}>
      <View style={styles.icon}>
        <Ionicons name='copy' size={24} color='white' />
      </View>
      <Text style={styles.text}>Tag copied!</Text>
      <Pressable onPress={onClose}>
        <Ionicons
          name='close'
          color={'white'}
          size={24}
          style={{ marginRight: 10 }}
        />
      </Pressable>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#375DFB',
    padding: 10,
    borderRadius: 40,
  },
  icon: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#8FA5FF',
  },

  text: {
    flex: 1,
    marginHorizontal: 10,
    color: 'white',
    fontWeight: 700,
    fontSize: 18,
  },
});
