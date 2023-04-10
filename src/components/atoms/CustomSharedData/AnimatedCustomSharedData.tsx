import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { SvgIcon } from '../../../assets/svgs';
import { getWidth } from '../../../config/dimensions';
import styles from './styles';
type CustomSharedDataType = {
  icon: any;
  title: String;
  onpress: () => void
}
export const CustomSharedData = ({ icon, title, onpress }: CustomSharedDataType) => {
  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  const handleOnPress = () => {
    animatedScale.setValue(0.98);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 5,
      speed: 10,
      useNativeDriver: true,
    }).start();
  };
  return (

    <Pressable
      onPressIn={handleOnPress}
      onPress={

        onpress

      }>
      <Animated.View style={[styles.maincontainer, { transform: [{ scale: animatedScale }] }]}>
        <View style={styles.yellowcontainer}></View>

        <SvgIcon name={icon} style={styles.yellowicon}></SvgIcon>

        <Text style={styles.title}>{title}</Text>

        <SvgIcon
          style={{ marginRight: getWidth(22) }}
          name="ArrowForward"></SvgIcon>
      </Animated.View>
    </Pressable>

  );
};
