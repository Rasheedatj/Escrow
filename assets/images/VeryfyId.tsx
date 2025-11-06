import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const VeryfyId = (props: any) => {
  return (
    <Svg width='65' height='65' viewBox='0 0 65 65' fill='none' {...props}>
      <Circle cx='32.5' cy='32.5' r='32.5' fill='#076CEC' fillOpacity='0.05' />
      <Circle
        cx='32.5'
        cy='32.5'
        r='31.9492'
        stroke='#076CEC'
        strokeOpacity='0.83'
        strokeWidth='1.10169'
      />
      <Circle cx='32.5008' cy='32.4998' r='22.5847' fill='white' />
      <Circle
        cx='32.5008'
        cy='32.4998'
        r='22.0339'
        stroke='#076CEC'
        strokeOpacity='0.63'
        strokeWidth='1.10169'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M37.7816 26.7647C37.7816 30.0004 35.1872 32.5949 31.9492 32.5949C28.7124 32.5949 26.1169 30.0004 26.1169 26.7647C26.1169 23.529 28.7124 20.9355 31.9492 20.9355C35.1872 20.9355 37.7816 23.529 37.7816 26.7647ZM31.9503 42.9693C27.1715 42.9693 23.1367 42.1926 23.1367 39.196C23.1367 36.1982 27.1969 35.4491 31.9503 35.4491C36.7301 35.4491 40.7638 36.2258 40.7638 39.2224C40.7638 42.2202 36.7037 42.9693 31.9503 42.9693Z'
        fill='#076CEC'
      />
      <Circle cx='40.763' cy='38.5687' r='5.45049' fill='#076CEC' />
      <Path
        d='M39.1098 38.566L40.2115 39.6677L42.4149 37.4643M45.7199 38.566C45.7199 41.304 43.5003 43.5237 40.7623 43.5237C38.0243 43.5237 35.8047 41.304 35.8047 38.566C35.8047 35.828 38.0243 33.6084 40.7623 33.6084C43.5003 33.6084 45.7199 35.828 45.7199 38.566Z'
        stroke='white'
        strokeWidth='0.932203'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default VeryfyId;
