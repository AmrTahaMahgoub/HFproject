import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreenView} from '../screens/HomeScreen/HomeScreenView';
import {AccountView} from '../screens/Account/AccountView';
import {BlogView} from '../screens/Bolg/BlogView';
import {FavoriteScreenView} from '../screens/Favorite/FavoriteView';
import {BottomTabNavigatorTypes} from './types';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import {getHeight, getWidth, RFValue} from '../config/dimensions';
import {Colors, Typography} from '../styles';
import {SvgIcon} from '../assets/svgs';
const Stack = createBottomTabNavigator<BottomTabNavigatorTypes>();
function TabBottomComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: getHeight(68),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.OFF_WHITE,
        paddingHorizontal: getWidth(16),
        paddingVertical: getHeight(12),
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),

        shadowOffset: {width: 0, height: -8},
        shadowOpacity: 0.04,
        shadowRadius: 10,
        elevation: 10,
      }}>
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
          flexDirection: 'row',
          borderRadius: RFValue(52),
          backgroundColor: isFocused ? Colors.YELLOW : Colors.OFF_WHITE,

          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          paddingHorizontal: getWidth(12),
          paddingVertical: getHeight(16),
        }}>
        <SvgIcon
          name={route.params.icon}
          color={isFocused ? Colors.GREEN : Colors.GREEN}
          width={getWidth(25.29)}
          height={getHeight(22.72)}
        />
        <Text
          style={{
            fontSize: Typography.FONT_SIZE_12,
            fontFamily: Typography.LIGHT_MANROPE,
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export {TabBottomComponent};

export function BottomTabNavigator() {
  return (
    <Stack.Navigator
      tabBar={props => <TabBottomComponent {...props} />}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        initialParams={{icon: 'HomeIcon'}}
        name="Home"
        component={HomeScreenView}
      />
      <Stack.Screen
        initialParams={{icon: 'MessageTextIcon'}}
        name="Blog"
        component={BlogView}
      />
      <Stack.Screen
        initialParams={{icon: 'FavoriteIcon'}}
        name="Favourites"
        component={FavoriteScreenView}
      />
      <Stack.Screen
        initialParams={{icon: 'UserIcon'}}
        name="Account"
        component={AccountView}
      />
    </Stack.Navigator>
  );
}
