import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigator} from './app-navigator';
const MainNavigator=()=> {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
export default MainNavigator;
