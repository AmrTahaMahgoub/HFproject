import {StackNavigationProp} from '@react-navigation/stack';
import {View} from 'react-native';
import {ComplexHeader, MainHeader} from '../../components/organisms/Header/Header';
import {BottomTabNavigatorTypes} from '../../navigations/types';

type ScreenNavigationProp = StackNavigationProp<BottomTabNavigatorTypes>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const FavoriteScreenView = ({navigation}: NavigationProps) => {
  return (
    <View>
    <MainHeader title={'Favorites'} IsIconShown={false} ></MainHeader>
  </View>
  );
};
