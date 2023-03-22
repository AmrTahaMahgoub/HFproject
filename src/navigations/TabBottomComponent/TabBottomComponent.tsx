import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../config/dimensions';
import {Colors} from '../../styles';
import {SvgIcon} from '../../assets/svgs';
import styles from './styles';

function TabBottomComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.bottonnavigationbar}>
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
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          height: getHeight(50),

          borderRadius: RFValue(50),
          backgroundColor: isFocused ? Colors.YELLOW : Colors.WHITE,
          paddingHorizontal: getWidth(16),
          paddingVertical: getHeight(12),
        }}>
        <SvgIcon
          name={route.params.icon}
          width={getWidth(23)}
          height={getHeight(27)}
        />
        <Text style={styles.navigationbartitle}>{isFocused ? label : ''}</Text>
      </View>
    </TouchableOpacity>
  );
}

export {TabBottomComponent};
