import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, View} from 'react-native';
import { CustomAccountBox } from '../../components/atoms';
import { StackNavigatorParamList } from '../../navigations/types';


type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};
const ContactUs = ({navigation}: NavigationProps,state: any) => {
  return (
    <View>
 
    </View>
  );
};
export default ContactUs;
