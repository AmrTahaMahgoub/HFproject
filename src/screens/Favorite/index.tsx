import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {StackNavigatorParamList} from '../../navigations/types';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};
const Favorite = ({navigation}: NavigationProps) => {
  return <View></View>;
};
export default Favorite;
