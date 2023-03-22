import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {StackNavigatorParamList} from '../../navigations/types';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};
const Account = ({navigation}: NavigationProps, state: any) => {
  return <View></View>;
};
export default Account;
