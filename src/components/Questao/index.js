import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Questao({navigation, quest}) {
  return (
    <View>
      <Text>Questão {quest}</Text>
    </View>
  );
}
