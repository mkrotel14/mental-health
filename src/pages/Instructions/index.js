import React from 'react';

import Root from '~/components/Root';
import Header from '~/components/Header';
import Card from '~/components/Card';
import ActionButton from '~/components/ActionButton';

import * as inst from '~/config/instructions.json';

import {InstructionsText, ScrollInstructions} from './styles';

export default function Instructions({navigation}) {
  return (
    <Root>
      <Header title="Método" />
      <Card header={true} headerText="Instruções">
        <ScrollInstructions>
          <InstructionsText>{inst.cabecalho}</InstructionsText>
          <InstructionsText>{inst.ponto1}</InstructionsText>
          <InstructionsText>{inst.ponto7}</InstructionsText>
          <InstructionsText>{inst.ponto4}</InstructionsText>
          <InstructionsText>{inst.segundo}</InstructionsText>
          <InstructionsText>{inst.terceiro}</InstructionsText>
        </ScrollInstructions>
      </Card>
      <ActionButton
        type="outline"
        title="Fazer o teste"
        loading={false}
        onPress={() => {
          navigation.navigate('Questionario');
        }}
      />
    </Root>
  );
}
