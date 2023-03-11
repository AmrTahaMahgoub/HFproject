import React from 'react';
import {SignIView} from '../screens/SignIn/SignInView';
import {SignUpView} from '../screens/SignUp/SignUpView';
import {PasswardResretView} from '../screens/PasswardReset/PasswardResetView';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../screens';
export type StackNavigatorParamList = {
  Splash: undefined;
  SignUpView: undefined;
  SignInView: undefined;
  PasswardResretView: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

export function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignUpView" component={SignUpView} />
      <Stack.Screen name="SignInView" component={SignIView} />
      <Stack.Screen name="PasswardResretView" component={PasswardResretView} />
    </Stack.Navigator>
  );
}
