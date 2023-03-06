import React, {useEffect} from 'react';
import { SplashView } from './SplashView';
const Splash=({navigation})=> {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUpView');
    }, 2000);
  }, []);
  return <SplashView />;
}
export default Splash;
{/* <Stack.Screen name="Splash" component={Splash} />
<Stack.Screen name="SignIn" component={SignIn} />
<Stack.Screen name="SignInView" component={SignIView} />
<Stack.Screen name="SignUp" component={SignUp} /> */}