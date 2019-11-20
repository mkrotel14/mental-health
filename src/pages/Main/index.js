import React, {useState} from 'react';
import {Switch} from 'react-native';

import Root from '~/components/Root';
import ActionButton from '~/components/ActionButton';
import Header from '~/components/Header';
import Card from '~/components/Card';
import * as tcle from '~/config/tcle.json';

import {ScrollTCLE, TCLE, SwitchText} from './styles';

export default function Main({navigation}) {
  const [switchVal, setSwitch] = useState(false);
  return (
    <Root>
      <Header title="Teste de Personalidade" />
      <Card
        header={true}
        headerText="Termo de Consentimento Livre e Esclarecido"
        footer={
          <>
            <SwitchText>Estou de acordo com os termos</SwitchText>
            <Switch
              value={switchVal}
              onValueChange={val => setSwitch(!switchVal)}
            />
          </>
        }>
        <ScrollTCLE>
          <TCLE>Titulo: {tcle.titulo}</TCLE>
          <TCLE>Objetivo: {tcle.objetivo}</TCLE>
          <TCLE>Riscos: {tcle.riscos}</TCLE>
          <TCLE>Confidencialidade: {tcle.confidencialidade}</TCLE>
        </ScrollTCLE>
      </Card>
      {/* <MainCard width={totalWidth(width)} height={height}>
        <LabelHeader>
          <Label />
        </LabelHeader>

        <SwitchContainer />
      </MainCard> */}
      <ActionButton
        type="outline"
        title="Prosseguir"
        loading={false}
        disabled={!switchVal}
        onPress={() => {
          navigation.navigate('Instructions');
        }}
      />
    </Root>
  );
}
