// import * as React from 'react';

import {Colors} from './src/styles';
import MainNavigator from './src/navigations';
import { SafeAreaView, StatusBar } from 'react-native';
import { useEffect } from 'react';
import  {notificationListner,   requestUserPermission } from './src/utils/notification';

import { Provider } from 'react-redux';
import { store } from './src/redux/stores/store';


const App = () => {
  useEffect(()=>{
    requestUserPermission();
     notificationListner();
   
  },[])
  return (
    <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.PETROLUIM} />
      <MainNavigator />
    </SafeAreaView>
    </Provider>
  );
};
export default App;





