import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import { HomeScreenView } from '../screens/HomeScreen/HomeScreenView';
// import { FavoriteScreenView } from '../screens/Favorite/FavoriteView';
// import { BlogView } from '../screens/Bolg/BlogView';
// import { AccountView } from '../screens/Account/AccountView';

import {HomeScreenView} from '../screens/HomeScreen/HomeScreenView';
import {AccountView} from '../screens/Account/AccountView';
import { BlogView } from '../screens/Bolg/BlogView';
import { FavoriteScreenView } from '../screens/Favorite/FavoriteView';

const Stack = createBottomTabNavigator<BottomTabNavigatorTypes>();
export type BottomTabNavigatorTypes = {
  Home: undefined;
    AccountView: undefined;
    Blog: undefined;
    FavoriteScreenView: undefined;
    
  };

export const BottomTabNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreenView} />
      <Stack.Screen name="AccountView" component={AccountView} />
      <Stack.Screen name="Blog" component={BlogView} />
      <Stack.Screen name="FavoriteScreenView" component={FavoriteScreenView} />
    </Stack.Navigator>
  );
}
