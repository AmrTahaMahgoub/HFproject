import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, View} from 'react-native';
import { CustomAccountBox } from '../../components/atoms';
import { StackNavigatorParamList } from '../../navigations/types';
import { ACCOUNT } from '../../redux/Api/GetData';

import {AccountView} from './AccountView';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};
const Account = ({navigation}: NavigationProps,state: any) => {
  return (
    <View>
 
    </View>
  );
};
export default Account;
