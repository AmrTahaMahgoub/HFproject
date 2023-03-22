import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import { StackNavigatorParamList } from '../../navigations/types';

import {PasswardResretView} from './PasswardResetView';
type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};
const PasswardReset = ({navigation}: NavigationProps) => {
  return (
    <View>
    
    </View>
  );
};
export default PasswardReset;
