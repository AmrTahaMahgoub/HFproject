import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import { StackNavigatorParamList } from '../../navigations/types';


import {SignUpView} from './SignUpView';
type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};
const SignUp = ({navigation}: NavigationProps) => {
  return (
    <View>
      <SignUpView navigation={navigation}></SignUpView>
    </View>
  );
};
export default SignUp;
