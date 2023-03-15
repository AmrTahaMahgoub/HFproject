import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import { StackNavigatorParamList } from '../../navigations/types';

import { HomeScreenView } from './HomeScreenView';

type ScreenNavigationProp = StackNavigationProp<
StackNavigatorParamList
>;
type NavigationProps={navigation:ScreenNavigationProp }
const HomeScreen = ({navigation}:NavigationProps) => {
  return (
    <View>
      {/* <HomeScreenView navigation={navigation}></HomeScreenView> */}
    </View>
  );
};
export default HomeScreen;