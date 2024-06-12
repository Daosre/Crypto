import { red } from '@mui/material/colors';
import { TypeAnimation } from 'react-type-animation';
 
const AnimationText = () => {
  return (
    <TypeAnimation className='Animationtext'
  sequence={[
    'We love buying Crypto',
    2000,
    'We love get more Crypto',
    2000,
    'We love some Crypto',
    2000,
    'We love us',
    2000,
  ]}
  speed={50}
  style={{ fontSize: '2em', color: '#f48c06'}}
  repeat={Infinity}
/>
  );
};

export default AnimationText
