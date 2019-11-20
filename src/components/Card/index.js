import React from 'react';

import {Label, LabelHeader, MainCard, Footer} from './styles';

export default function Card(props) {
  return (
    <MainCard>
      {props.header ? (
        <LabelHeader>
          <Label>{props.headerText}</Label>
        </LabelHeader>
      ) : null}
      {props.children}
      {props.footer ? <Footer>{props.footer}</Footer> : null}
    </MainCard>
  );
}
