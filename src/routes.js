import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import Instructions from '~/pages/Instructions';
import Questionario from '~/pages/Questionario';

const Routes = createAppContainer(
  createSwitchNavigator({Main, Instructions, Questionario}),
);

export default Routes;
