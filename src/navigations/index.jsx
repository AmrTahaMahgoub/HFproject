import * as React from 'react';
import {AppStackNavigator} from './app-navigator';
import {NavigationContainer} from '@react-navigation/native';




const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};
export default MainNavigator;
