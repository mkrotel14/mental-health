import styled from 'styled-components';

export const TCLE = styled.Text`
  font-size: 14;
  padding: 15px;
  text-align: justify;
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

export const ScrollTCLE = styled.ScrollView``;

export const SwitchContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px;
`;

export const SwitchText = styled.Text`
  justify-content: center;
  flex-direction: row;
  font-size: 13px;
  margin: 5px 5px 0 15px
  font-weight: bold;
`;

export const MainCard = styled.View`
  margin: 20px
  background-color: #fff
  border-radius: 8px
  width: ${props => props.width}
  height: ${props => props.height / 1.4}
  shadow-color: #1a1917;
  shadow-offset: 0 3px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
`;
