import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import { StackNavigatorParamList } from '../../navigations/app-navigator';
import {PasswardResretView} from './PasswardResetView';
type ScreenNavigationProp = StackNavigationProp<
StackNavigatorParamList
>;
type NavigationProps={navigation:ScreenNavigationProp }
const PasswardReset = ({navigation}:NavigationProps) => {
  return (
    <View>
      <PasswardResretView navigation={navigation}></PasswardResretView>
    </View>
  );
};
export default PasswardReset;
