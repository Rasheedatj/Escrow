import { PageTitleProp } from '@/lib/types';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const PageTitle = ({ children, headerRight, hasBackButton }: PageTitleProp) => {
  const router = useRouter();
  if (hasBackButton)
    return (
      <View style={styles.box}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name='chevron-back' color={'#111827'} size={24} />
        </Pressable>
        <Text style={styles.text}>{children}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
      {headerRight}
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#CECECE70',
    paddingBottom: 10,
  },
  title: {
    fontSize: 27,
    color: '#000000C9',
    fontWeight: 600,
  },

  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#CECECE70',
    marginHorizontal: 16,
    marginTop: 20,
  },

  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20.39,
    color: '#000000B5',
    textTransform: 'capitalize',
    fontWeight: 500,
  },
});
