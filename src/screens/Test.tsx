
import { View, Text, FlatList, Animated, Pressable, Image, } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParamList } from '../navigations/types';
import React, { useRef, useState, } from 'react';

//import Animated, { useAnimatedScrollHandler, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Card, ImageTextRow } from '../components/atoms';
import { DATA } from '../redux/Api/GetData';
import { RFValue, getHeight, getWidth } from '../config/dimensions';
import { Colors, Typography } from '../styles';
import { SvgIcon } from '../assets/svgs';
import { transform } from '@babel/core';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = { navigation: ScreenNavigationProp };
const Test = ({ navigation }: NavigationProps) => {

    const scrollY = useRef(new Animated.Value(0)).current;
  

    return (
        <View>
            <Animated.FlatList
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true })}

                style={{
                    height: '92%',
                    marginTop: getHeight(4),
                }}
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={({ item, index }) => {

                    const inputRange = [
                        -1, 0, 100 * index, 400 * (index + 2)
                    ]
                    const opacityInputRange = [
                        -1, 0, 1 * index, 350 * (index + 0.1)
                    ]
                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    })
                    const opacity = scrollY.interpolate({
                        inputRange: opacityInputRange,
                        outputRange: [1, 1, 1, 0]
                    })

                    
           
                   return <Card
                   style={{transform:[{scale}],
                opacity:opacity}}

                        onpressed={() => {
                            navigation.navigate('SpecificationsView');
                        }}
                        biano={item.banio}
                        area={item.area}
                        bed={item.bed}
                        image={item.image}
                        price={item.price}
                        id={item.id}></Card>
                }}></Animated.FlatList>
        </View>
    );


};

export default Test