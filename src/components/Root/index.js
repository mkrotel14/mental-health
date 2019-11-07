import React from 'react';
import {Platform, Dimensions, StyleSheet, SafeAreaView} from 'react-native';
import {
  isIphoneX,
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

const {height} = Dimensions.get('screen');

const IS_IPHONE = Platform.OS === 'ios';

export default function Root(props) {
  return <SafeAreaView style={styles.root}>{props.children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    height: IS_IPHONE
      ? isIphoneX()
        ? height - (getStatusBarHeight() + getBottomSpace() + 10)
        : height - 20
      : height,
    backgroundColor: '#f5f0ed',
  },
});
