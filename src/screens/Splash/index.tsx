import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StackNavigatorParamList } from '../../navigations/types';

import { SplashView } from './SplashView';






type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = { navigation: ScreenNavigationProp };
const Splash = ({ navigation }: NavigationProps) => {
  useEffect(() => {
  
    setTimeout(() => {
      navigation.navigate('SignUpView');
    }, 2000);
  }, []);
  return <SplashView />
    
 
};
export default Splash;
