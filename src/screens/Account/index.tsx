import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import { StackNavigatorParamList } from '../../navigations/app-navigator';
import { AccountView } from './AccountView';




type ScreenNavigationProp = StackNavigationProp<
StackNavigatorParamList
>;
type NavigationProps={navigation:ScreenNavigationProp }
const Account = ({navigation}:NavigationProps) => {
  return (
    <View>
      <AccountView navigation={navigation}></AccountView>
    </View>
  );
};
export default Account;