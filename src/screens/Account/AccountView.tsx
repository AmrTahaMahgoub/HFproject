import {StackNavigationProp} from '@react-navigation/stack';
import {View} from 'react-native';
import {ComplexHeader} from '../../components/organisms/Header/Header';
import {BottomTabNavigatorTypes} from '../../navigations/types';

type ScreenNavigationProp = StackNavigationProp<BottomTabNavigatorTypes>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const AccountView = ({navigation}: NavigationProps) => {
  return (
    <View>
      <ComplexHeader title={'Search'} onPressed={() => {}}></ComplexHeader>
    </View>
  );
};
