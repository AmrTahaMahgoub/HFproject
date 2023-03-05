import React, {useEffect} from 'react';
import { SplashView } from './SplashView';
const Splash=({navigation})=> {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUp');
    }, 2000);
  }, []);
  return <SplashView />;
}
export default Splash;
