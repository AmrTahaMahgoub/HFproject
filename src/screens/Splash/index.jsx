import React, {useEffect} from 'react';
import { SplashView } from './SplashView';
const Splash=({navigation})=> {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('PasswardReset');
    }, 2000);
  }, []);
  return <SplashView />;
}
export default Splash;
