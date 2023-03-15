import {StackNavigationProp} from '@react-navigation/stack';
import {View} from 'react-native';
import {ComplexHeader, MainHeader} from '../../components/organisms/Header/Header';
import {BottomTabNavigatorTypes} from '../../navigations/types';

type ScreenNavigationProp = StackNavigationProp<BottomTabNavigatorTypes>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const AccountView = ({navigation}: NavigationProps) => {
  return (
    <View>
      <MainHeader title={'Account'} ></MainHeader>
    </View>
  );
};
