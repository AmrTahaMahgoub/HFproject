// import * as React from 'react';

import {Colors} from './src/styles';
import MainNavigator from './src/navigations';
import { SafeAreaView, StatusBar } from 'react-native';
import { useEffect } from 'react';
import  {notificationListner,   requestUserPermission } from './src/utils/notification';


const App = () => {
  useEffect(()=>{
    requestUserPermission();
     notificationListner();
   
  },[])
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.PETROLUIM} />
      <MainNavigator />
    </SafeAreaView>
  );
};
export default App;





