import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import Questionario from '~/pages/Questionario';

const Routes = createAppContainer(createSwitchNavigator({Main, Questionario}));

export default Routes;
