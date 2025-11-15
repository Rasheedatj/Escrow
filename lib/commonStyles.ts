import { StyleSheet } from 'react-native';
import { deviceWidth } from './helpers';

export const appColors = {
  primary50: '#F4FAFF',
  primary100: '#B8DCFB',
  primary500: '#076CEC',
  primary600: '#0B489D',
  gray100: '#D9D9D92B',
  gray300: '#F4FAFF',
  gray400: '#E8E8E8',
  grayText300: '#3E3A3A80',
  grayText400: '#2E2F318A',
  grayText500: '#818181',
  black100: '#4F4F4F',
  black: '#292929',
  white: '#FFFFFF',
  danger100: '#ED7D661A',
  danger500: '#ED7D66',
  success: '#6FC475',
  warning: '#F5D256',
  border: '#989898',
};

export const globalStyles = StyleSheet.create({
  rootContainer: {
    padding: 16,
  },

  title: {
    fontSize: deviceWidth > 400 ? 32.91 : 26,
    color: appColors.black,
    fontWeight: 500,
    paddingBottom: 10,
    marginTop: 45,
  },

  description: {
    color: '#A8A8A8',
    fontSize: deviceWidth > 400 ? 17 : 14,
    marginBottom: 30,
    lineHeight: 22,
  },
});
