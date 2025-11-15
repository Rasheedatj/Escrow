import { deviceWidth } from '@/lib/helpers';
import { ShowProps } from '@/lib/types';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

const PasswordVisibilityToggle = ({ show, onPress }: ShowProps) => {
  return (
    <Pressable onPress={onPress}>
      {show ? (
        <Ionicons
          name='eye'
          size={deviceWidth > 400 ? 24 : 20}
          color='#494848'
        />
      ) : (
        <Ionicons
          name='eye-off'
          size={deviceWidth > 400 ? 24 : 20}
          color='#494848'
        />
      )}
    </Pressable>
  );
};

export default PasswordVisibilityToggle;
