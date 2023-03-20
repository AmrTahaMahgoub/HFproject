// import * as React from 'react';

import {Colors} from './src/styles';
import MainNavigator from './src/navigations';
import { SafeAreaView, StatusBar } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.PETROLUIM} />
      <MainNavigator />
    </SafeAreaView>
  );
};
export default App;





