import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import Header from '~/components/Header';
import Questao from '~/components/Questao';

import Root from '~/components/Root';

export default function Questionario({navigation}) {
  const [quest, setQuest] = useState(1);

  return (
    <Root>
      <Header title="Questionário" />
      <View style={{paddingLeft: 10}}>
        <AnimatedCircularProgress
          size={80}
          width={7}
          fill={(quest * 100) / 45}
          tintColor="#00e0ff"
          arcSweepAngle={270}
          lineCap="round"
          rotation={225}
          backgroundColor="#3d5875">
          {fill => <Text>{Math.round((fill * 45) / 100)} de 45</Text>}
        </AnimatedCircularProgress>
        <Text>Progresso do Questionário</Text>
        <Questao navigation={navigation} quest={quest} />
      </View>
      {quest !== 45 ? (
        <TouchableOpacity
          onPress={() => {
            if (quest < 45) {
              setQuest(quest + 1);
            }
          }}>
          <Text>Próxima Questão</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (quest < 45) {
              setQuest(quest + 1);
            }
          }}>
          <Text>Gerar Resultado</Text>
        </TouchableOpacity>
      )}
    </Root>
  );
}
