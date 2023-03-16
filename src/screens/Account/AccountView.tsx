import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList, Text, View} from 'react-native';
import {CustomAccountBox, CustomSharedData} from '../../components/atoms';
import {
  ComplexHeader,
  MainHeader,
} from '../../components/organisms/Header/Header';
import {BottomTabNavigatorTypes} from '../../navigations/types';
import {ACCOUNT} from '../../redux/Api/GetData';

type ScreenNavigationProp = StackNavigationProp<BottomTabNavigatorTypes>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const AccountView = ({navigation}: NavigationProps) => {
  return (
    <View>
      <MainHeader title={'Account'}></MainHeader>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ACCOUNT}
        renderItem={({item}) => (
          <CustomAccountBox
            image={item.image}
            name={item.name}
            email={item.email}></CustomAccountBox>
        )}></FlatList>

      <CustomSharedData
        icon="ProfileCircle"
        title={'profile'}></CustomSharedData>
         <CustomSharedData
        icon="InternetCircule"
        title={'Change language'}></CustomSharedData>
         <CustomSharedData
        icon="ExcelemationCircule"
        title={'About us'}></CustomSharedData>
         <CustomSharedData
        icon="MessageEdit"
        title={'Contact us'}></CustomSharedData>
       
    </View>
  );
};
