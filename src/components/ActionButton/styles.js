import styled from 'styled-components';
import {Platform} from 'react-native';

const IS_IPHONE = Platform.OS === 'ios';

export const ContainerButton = styled.View`
  flex: 1
  flex-direction: column
  align-self: flex-end;
  position: absolute;
  bottom: ${IS_IPHONE ? 40 : 10}
  right: 20
`;
