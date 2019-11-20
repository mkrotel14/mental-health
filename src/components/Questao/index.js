import React from 'react';
import * as perguntas from '~/config/perguntas.json';

import {Question} from './styles';

export default function Questao({navigation, quest}) {
  return (
    <>
      <Question>{perguntas[quest]}</Question>
    </>
  );
}
