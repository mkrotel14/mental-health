import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Content, Card, CardItem, Body, Left, Right, Radio} from 'native-base';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import RadioForm from 'react-native-simple-radio-button';

import Header from '~/components/Header';
import Questao from '~/components/Questao';
import Root from '~/components/Root';

import {Text, ButtonContainer} from './styles';

const {height} = Dimensions.get('screen');

export default function Questionario({navigation}) {
  const [quest, setQuest] = useState(1);
  const [rating, setRating] = useState();
  const [values, setValues] = useState([]);

  return (
    <Root>
      <Header title="Questionário" />
      <Content contentContainerStyle={styles.ContentStyle}>
        <Card>
          <CardItem header bordered>
            <Left>
              <AnimatedCircularProgress
                size={80}
                width={7}
                fill={(quest * 100) / 34}
                tintColor="#00e0ff"
                arcSweepAngle={270}
                lineCap="round"
                rotation={225}
                backgroundColor="#3d5875">
                {fill => <Text>{Math.round((fill * 34) / 100)} de 34</Text>}
              </AnimatedCircularProgress>
            </Left>
            <Right>
              <Text>Progresso do Questionário</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Body style={styles.BodyStyle}>
              <Questao navigation={navigation} quest={quest} />
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <RadioForm
                radio_props={[
                  {label: '1', value: 1},
                  {label: '2', value: 2},
                  {label: '3', value: 3},
                  {label: '4', value: 4},
                  {label: '5', value: 5},
                  {label: '6', value: 6},
                  {label: '7', value: 7},
                ]}
                formHorizontal={true}
                labelHorizontal={false}
                initial={3}
                animation={true}
                onPress={value => setRating({question: quest, value})}
              />
            </Body>
          </CardItem>
          <CardItem footer>
            <ButtonContainer>
              {quest !== 34 ? (
                <Button
                  buttonStyle={styles.ButtonNextStyle}
                  titleStyle={styles.ButtonTextStyle}
                  icon={
                    <Icon
                      style={styles.ButtonIconStyle}
                      name="arrow-right"
                      size={15}
                      color="white"
                    />
                  }
                  iconRight
                  title="Próxima Questão"
                  onPress={() => {
                    if (quest < 34) {
                      setQuest(quest + 1);
                    }
                  }}
                />
              ) : (
                <Button
                  buttonStyle={styles.ButtonDoneStyle}
                  titleStyle={styles.ButtonTextStyle}
                  icon={
                    <Icon
                      style={styles.ButtonIconStyle}
                      name="check"
                      size={15}
                      color="white"
                    />
                  }
                  iconRight
                  title="Gerar Resultado"
                  onPress={() => {
                    if (quest < 34) {
                      setQuest(quest + 1);
                    }
                  }}
                />
              )}
            </ButtonContainer>
          </CardItem>
        </Card>
      </Content>
    </Root>
  );
}

const styles = StyleSheet.create({
  ContentStyle: {
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  },
  BodyStyle: {
    alignItems: 'center',
    height: height / 3,
  },
  ButtonNextStyle: {
    backgroundColor: '#33b5e5',
  },
  ButtonDoneStyle: {
    backgroundColor: '#00c851',
  },
  ButtonTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  ButtonIconStyle: {
    marginHorizontal: 5,
  },
});
