import React from 'react';
import {Image, Text, View} from 'react-native';
import {SvgIcon} from '../../../assets/svgs';

import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

export const CustomSharedData = ({icon, title, image}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        height: getHeight(56),
        width: getWidth(343),
        marginHorizontal: getWidth(16),
        backgroundColor: Colors.WHITE,
        borderRadius: RFValue(4),


        marginBottom: getHeight(15),
      }}>
      <View
        style={{
          width: getHeight(4),
          height: getHeight(56),
          backgroundColor: Colors.YELLOW,
          borderTopLeftRadius: RFValue(36),
          borderBottomLeftRadius: RFValue(25),
        }}></View>
      <SvgIcon
        name={icon}
        style={{marginLeft: getWidth(20), marginRight: getWidth(16)}}></SvgIcon>
      <Text
        style={{
          flex:1,
          //marginRight: getWidth(205),
          fontFamily: Typography.BOLD_NUNITO,
          fontWeight: Typography.FONT_WEIGHT_REGULAR,
          lineHeight:Typography.FONT_SIZE_19,
          color:Colors.BLACK
        }}>
        {title}
      </Text>
      <SvgIcon
        style={{marginRight: getWidth(22)}}
        name="ArrowForward"></SvgIcon>
    </View>
  );
};
