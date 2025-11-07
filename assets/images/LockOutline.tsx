import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LockOutline = (props: any) => {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        d='M16.4237 9.44804V7.30104C16.4237 4.78804 14.3857 2.75004 11.8727 2.75004C9.35973 2.73904 7.31373 4.76704 7.30273 7.28104V7.30104V9.44804'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.683 21.25H8.042C5.948 21.25 4.25 19.553 4.25 17.458V13.169C4.25 11.074 5.948 9.37695 8.042 9.37695H15.683C17.777 9.37695 19.475 11.074 19.475 13.169V17.458C19.475 19.553 17.777 21.25 15.683 21.25Z'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M11.8633 14.2031V16.4241'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default LockOutline;
