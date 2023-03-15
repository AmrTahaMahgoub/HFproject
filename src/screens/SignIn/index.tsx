import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import { StackNavigatorParamList } from '../../navigations/types';


import {SignIView} from './SignInView';
type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};
const SignIn = ({navigation}: NavigationProps) => {
  return (
    <View>
      <SignIView navigation={navigation}></SignIView>
    </View>
  );
};
export default SignIn;
