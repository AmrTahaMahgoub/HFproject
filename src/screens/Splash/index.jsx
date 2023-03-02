import React, {useEffect} from 'react';
import { SplashView } from './SplashView';
const Splash=({navigation})=> {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 2000);
  }, []);
  return <SplashView />;
}
export default Splash;
