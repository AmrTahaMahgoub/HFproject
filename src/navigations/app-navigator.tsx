import React from 'react';
import {SignIView} from '../screens/SignIn/SignInView';
import {SignUpView} from '../screens/SignUp/SignUpView';
import {PasswardResretView} from '../screens/PasswardReset/PasswardResetView';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../screens';
import {BottomTabNavigator} from './bottom-tab-navigator';
import {StackNavigatorParamList} from './types';
import {SpecificationsView} from '../screens/Specifications/Specifications';
import { TurkeyNewsView } from '../screens/TurkeyNews/TurketNews';
import { AboutUsView } from '../screens/AboutUs/AboutUsView';
import { ContactUsView } from '../screens/ContactUs/ContactUsView';
import Test from '../screens/Test';

const Stack = createStackNavigator<StackNavigatorParamList>();

export function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Test" component={Test} /> */}
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      {/* <Stack.Screen name="SignUpView" component={SignUpView} /> */}
      <Stack.Screen name="SignInView" component={SignIView} />
      <Stack.Screen name="PasswardResretView" component={PasswardResretView} />
      <Stack.Screen name="SpecificationsView" component={SpecificationsView} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="TurkeyNewsView" component={TurkeyNewsView} />
      <Stack.Screen name="AboutUsView" component={AboutUsView} />
      <Stack.Screen name="ContactUsView" component={ContactUsView} />
     
      
    </Stack.Navigator>
  );
}
