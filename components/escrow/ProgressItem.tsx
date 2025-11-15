import { deviceWidth } from '@/lib/helpers';
import { ProgressProp } from '@/lib/types';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProgressItem = ({
  progress,
  isFirst,
}: {
  progress: ProgressProp;
  isFirst?: boolean;
}) => {
  const { title, isCompleted, details } = progress;
  return (
    <View style={styles.box}>
      <View style={styles.iconBox}>
        {!isFirst && (
          <Text style={[styles.line, isCompleted && styles.completed]}></Text>
        )}

        <View style={[styles.icon, isCompleted && styles.iconCompleted]}>
          {isCompleted && (
            <Ionicons name='checkmark' color={'white'} size={24} />
          )}
        </View>
      </View>
      <View style={styles.article}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}>{details}</Text>
      </View>
    </View>
  );
};

export default ProgressItem;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
  },

  iconBox: {
    alignItems: 'center',
  },

  line: {
    width: 3,
    height: 40,
    backgroundColor: '#898989C2',
  },

  completed: {
    backgroundColor: '#6FC475',
  },

  icon: {
    width: deviceWidth > 400 ? 32 : 28,
    height: deviceWidth > 400 ? 32 : 28,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#898989',
    borderWidth: 1,
  },

  iconCompleted: {
    backgroundColor: '#6FC475',
    borderWidth: 0,
  },

  article: {
    marginLeft: 10,
  },

  title: {
    fontSize: deviceWidth > 400 ? 15.71 : 14,
    fontWeight: 500,
    color: '#292929',
  },

  details: {
    fontSize: deviceWidth > 400 ? 13.34 : 12,
    color: '#29292978',
    fontWeight: 500,
  },
});
