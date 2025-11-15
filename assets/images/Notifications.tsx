import { deviceWidth } from '@/lib/helpers';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Notifications = (props: any) => {
  return (
    <Svg
      width={deviceWidth > 400 ? 27 : 24}
      height='27'
      viewBox='0 0 27 27'
      fill='none'
      {...props}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.93843 15.5105V15.2642C3.97457 14.5353 4.20817 13.8291 4.61515 13.2183C5.29256 12.4846 5.75629 11.5856 5.95768 10.6155C5.95768 9.86569 5.95768 9.10519 6.02317 8.3554C6.36153 4.74572 9.93069 2.25 13.4562 2.25H13.5435C17.069 2.25 20.6382 4.74572 20.9874 8.3554C21.0529 9.10519 20.9874 9.86569 21.042 10.6155C21.2461 11.5878 21.7094 12.4897 22.3845 13.229C22.7946 13.8344 23.0285 14.538 23.0613 15.2642V15.4998C23.0856 16.4791 22.7484 17.4339 22.1117 18.1883C21.2703 19.0704 20.1286 19.6192 18.9027 19.7307C15.3079 20.1164 11.6809 20.1164 8.08608 19.7307C6.86154 19.6144 5.72148 19.0664 4.87711 18.1883C4.25025 17.4333 3.91752 16.4842 3.93843 15.5105Z'
        stroke='#131313'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M10.75 23.458C11.3117 24.163 12.1365 24.6193 13.042 24.7258C13.9474 24.8324 14.8588 24.5804 15.5744 24.0257C15.7945 23.8616 15.9925 23.6709 16.1638 23.458'
        stroke='#131313'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default Notifications;
