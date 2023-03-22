import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, View} from 'react-native';
import {CustomAccountBox} from '../../components/atoms';
import {StackNavigatorParamList} from '../../navigations/types';
import {AboutUsView} from './AboutUsView';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};
const AboutUs = ({navigation}: NavigationProps) => {
  return (
    <View>
      <AboutUsView></AboutUsView>
    </View>
  );
};
export default AboutUs;
