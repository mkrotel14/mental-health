import {Dimensions} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('screen');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = size => (width / guidelineBaseWidth) * size;

export const verticalScale = size => (height / guidelineBaseHeight) * size;

export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const totalWidth = ScreenWidth => {
  if (ScreenWidth <= 480) {
    return 92 * (ScreenWidth / 100);
  } else if (ScreenWidth > 480 && ScreenWidth <= 850) {
    return 47 * (ScreenWidth / 100);
  } else {
    return 72 * (ScreenWidth / 100);
  }
};
