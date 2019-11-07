import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import {moderateScale} from '~/helpers';

import {ContainerButton} from './styles';

export default function ActionButton({
  title,
  type,
  loading,
  onPress,
  iconRight,
  iconComponent,
  disabled,
}) {
  return (
    <ContainerButton>
      <Button
        type={type}
        title={title}
        titleStyle={styles.ButtonTitleStyle}
        loading={loading}
        buttonStyle={styles.ButtonStyle}
        onPress={onPress}
        iconRight={iconRight}
        icon={iconRight ? iconComponent : null}
        disabled={disabled}
      />
    </ContainerButton>
  );
}

const styles = StyleSheet.create({
  ButtonStyle: {
    height: moderateScale(50),
    borderRadius: 8,
  },
  ButtonTitleStyle: {
    fontSize: moderateScale(17),
    // fontFamily: 'Lato-Regular',
  },
});
