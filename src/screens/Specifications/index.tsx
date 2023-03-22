import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import { StackNavigatorParamList } from '../../navigations/types';
import { SpecificationsView } from './Specifications';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};
const Specifications = ({navigation}: NavigationProps) => {
  return (
    <View>
      <SpecificationsView navigation={navigation}></SpecificationsView>
    </View>
  );
};
export default Specifications;