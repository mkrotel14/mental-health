import {Dimensions} from 'react-native';
import styled from 'styled-components';

const {height, width} = Dimensions.get('screen');
import {totalWidth} from '~/helpers';

export const MainCard = styled.View`
  margin: 20px
  background-color: #fff
  border-radius: 8px
  width: ${totalWidth(width)}
  height: ${height / 1.4}
  shadow-color: #1a1917;
  shadow-offset: 0 3px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
`;

export const LabelHeader = styled.View`
  padding: 5px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding-top: 5px;
`;

export const Footer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px;
`;
