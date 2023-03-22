import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {SvgIcon} from '../../../assets/svgs';
import {getWidth} from '../../../config/dimensions';
import styles from './styles';

export const CustomSharedData = ({icon, title, onpress}: any) => {
  return (
    <Pressable onPress={onpress}>
      <View style={styles.maincontainer}>
        <View style={styles.yellowcontainer}></View>

        <SvgIcon name={icon} style={styles.yellowicon}></SvgIcon>

        <Text style={styles.title}>{title}</Text>

        <SvgIcon
          style={{marginRight: getWidth(22)}}
          name="ArrowForward"></SvgIcon>
      </View>
    </Pressable>
  );
};
