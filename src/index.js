import React from 'react';
import {SafeAreaView} from 'react-native';
import {Root} from 'native-base';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <Root>
    <Routes />
  </Root>
);

export default App;
