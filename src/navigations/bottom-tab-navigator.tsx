import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreenView} from '../screens/HomeScreen/HomeScreenView';
import {AccountView} from '../screens/Account/AccountView';
import {BlogView} from '../screens/Bolg/BlogView';
import {FavoriteScreenView} from '../screens/Favorite/FavoriteView';
import {BottomTabNavigatorTypes} from './types';
import {TabBottomComponent} from './TabBottomComponent/TabBottomComponent';

const Stack = createBottomTabNavigator<BottomTabNavigatorTypes>();

export function BottomTabNavigator() {
  return (
 
    <Stack.Navigator
      tabBar={props => <TabBottomComponent {...props} />}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        initialParams={{icon: 'HomeIcon'}}
        name="Home"
        component={HomeScreenView}
      />
      <Stack.Screen
        initialParams={{icon: 'MessageTextIcon'}}
        name="Blog"
        component={BlogView}
      />
      <Stack.Screen
        initialParams={{icon: 'UnFavoriteIcon'}}
        name="Favourites"
        component={FavoriteScreenView}
      />
      <Stack.Screen
        initialParams={{icon: 'UserIcon'}}
        name="Account"
        component={AccountView}
      />
    </Stack.Navigator>
  
  );
}
