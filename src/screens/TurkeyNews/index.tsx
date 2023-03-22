import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import { StackNavigatorParamList } from '../../navigations/types';

import { TurkeyNewsView } from './TurketNews';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};
const Specifications = ({navigation}: NavigationProps) => {
  return (
    <View>
      <TurkeyNewsView navigation={navigation}></TurkeyNewsView>
    </View>
  );
};
export default Specifications;