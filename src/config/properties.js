import {Dimensions} from 'react-native';

export const Properties = {
  color: {
    black: '#121318',
    white: '#eaeaec',
    green: '#37b30d',
  },
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  fonts: {
    default: 'Poppins-Regular',
  },
};
