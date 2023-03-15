import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TitlesView} from '../../components/atoms/Titles/TitlesView';
import {TourCard} from '../../components/atoms/TourCard/TourCard';

import {
  ComplexHeader,
  MainHeader,
  SimpleHeader,
} from '../../components/organisms/Header/Header';
import {getWidth, RFValue} from '../../config/dimensions';
import {BottomTabNavigatorTypes} from '../../navigations/types';
import {TITLES, TOURTITLE} from '../../redux/Api/GetData';

type ScreenNavigationProp = StackNavigationProp<BottomTabNavigatorTypes>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const BlogView = ({navigation}: NavigationProps, state: any) => {
  return (
    <View>
      <MainHeader title={'Blog posts'} IsIconShown={false}></MainHeader>
      <View>
        <View
          style={{
            backgroundColor: Colors.OFF_WHITE,
            paddingLeft: getWidth(16),
          }}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={TITLES}
            renderItem={({item}) => (
              <TitlesView title={item.key}></TitlesView>
            )}></FlatList>
        </View>
     <View  style={{
            backgroundColor: Colors.OFF_WHITE,
            paddingHorizontal: getWidth(16),
          }}>
     <FlatList
          columnWrapperStyle={{
            
           justifyContent: 'space-around',
          }}
          key={state.horizontal ? 'h' : 'v'}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={TOURTITLE}
          renderItem={({item}) => (
            <TourCard
              image={item.image}
              text1={item.text1}
              text2={item.text2}
              readmore={item.readmore}
              date={item.date}></TourCard>
          )}></FlatList>
     </View>
      </View>
    </View>
  );
};
