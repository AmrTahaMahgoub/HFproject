import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreenView} from '../../screens/HomeScreen/HomeScreenView';
import {AccountView} from '../../screens/Account/AccountView';
import {BlogView} from '../../screens/Bolg/BlogView';
import {FavoriteScreenView} from '../../screens/Favorite/FavoriteView';
import {BottomTabNavigatorTypes} from '.././types';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../config/dimensions';
import {Colors, Typography} from '../../styles';
import { SvgIcon } from '../../assets/svgs';
import styles from './styles';

function TabBottomComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View
      style={styles.bottonnavigationbar}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          if (route.state) {
            if (route.state.routes.length) {
              navigation.navigate(route.state.routes[0].name);
            }
          } else {
            navigation.navigate(route.name);
          }
        };
        return (
          <Item
            key={index.toString() + 'sds'}
            route={route}
            isFocused={isFocused}
            label={label}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}

function Item({route, isFocused, label, onPress}: any) {
  let _onPress = () => {
    onPress();
  };

  return (
    <TouchableOpacity activeOpacity={1} key={route.key} onPress={_onPress}>
      <View
        style={{
          height: '100%',
          flexDirection: 'row',
          borderRadius: RFValue(50),
          backgroundColor: isFocused ? Colors.YELLOW : Colors.WHITE,
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          paddingHorizontal: getWidth(14),
        
        }}>
        <SvgIcon
          name={route.params.icon}
          color={isFocused ? Colors.GREEN : Colors.GREEN}
          width={getWidth(22)}
          height={getHeight(27)}
        />
        <Text
          style={styles.navigationbartitle}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export {TabBottomComponent};