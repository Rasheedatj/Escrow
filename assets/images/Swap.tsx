import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SwapIocn = (props: any) => {
  return (
    <Svg width='23' height='21' viewBox='0 0 23 21' fill='none' {...props}>
      <Path
        d='M17.0896 19.8034V3.91602'
        stroke={props.color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.8468 15.0254L17.0894 19.8048L12.332 15.0254'
        stroke={props.color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.50752 0.75V16.6374'
        stroke={props.color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M0.75 5.52944L5.50741 0.75L10.2648 5.52944'
        stroke={props.color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default SwapIocn;
