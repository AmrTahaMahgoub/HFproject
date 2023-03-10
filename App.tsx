import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from './src/styles';
import MainNavigator from './src/navigations';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.PETROLUIM} />
      <MainNavigator />
    </SafeAreaView>
  );
};
export default App;
