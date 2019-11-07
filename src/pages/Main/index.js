import React, {useState} from 'react';
import {Dimensions, Switch, StyleSheet} from 'react-native';

import Root from '~/components/Root';
import ActionButton from '~/components/ActionButton';
import Header from '~/components/Header';
import * as tcle from '~/config/tcle.json';

import {totalWidth} from '~/helpers';

import {
  ScrollTCLE,
  TCLE,
  Label,
  LabelHeader,
  MainCard,
  SwitchText,
  SwitchContainer,
} from './styles';

const {height, width} = Dimensions.get('screen');

export default function Main({navigation}) {
  const [switchVal, setSwitch] = useState(false);
  return (
    <Root>
      <Header title="Teste de Personalidade" />
      <MainCard width={totalWidth(width)} height={height}>
        <LabelHeader>
          <Label>Termo de Consentimento Livre e Esclarecido</Label>
        </LabelHeader>
        <ScrollTCLE>
          <TCLE>Titulo: {tcle.titulo}</TCLE>
          <TCLE>Objetivo: {tcle.objetivo}</TCLE>
          <TCLE>Riscos: {tcle.riscos}</TCLE>
          <TCLE>Confidencialidade: {tcle.confidencialidade}</TCLE>
        </ScrollTCLE>
        <SwitchContainer>
          <SwitchText>Estou de acordo com os termos</SwitchText>
          <Switch
            value={switchVal}
            onValueChange={val => setSwitch(!switchVal)}
          />
        </SwitchContainer>
      </MainCard>
      <ActionButton
        type="outline"
        title="Fazer o teste"
        loading={false}
        disabled={!switchVal}
        onPress={() => {
          navigation.navigate('Questionario');
        }}
      />
    </Root>
  );
}

const styles = StyleSheet.create({
  IconStyle: {
    marginLeft: 10,
    marginTop: 5,
  },
});
