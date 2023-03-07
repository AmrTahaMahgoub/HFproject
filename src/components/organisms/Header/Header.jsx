import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {getHeight} from '../../../config/dimensions';
import {Colors} from '../../../styles';
import styles from './styles';
import {ViewRow} from '../../atoms/ViewRow';
import SvgIcon from '../../../assets/svgs';
import {CustomText16} from '../../atoms/Text/text';
import {RFValue} from '../../../config/dimensions';

export const SimpleHeader = props => {
  return (
    <>
      <ViewRow style={styles.contentHeader}>
        <Pressable onPress={props.onpress}>
          <SvgIcon name={'ArrowBack'}></SvgIcon>
        </Pressable>
        <CustomText16 style={styles.title}>
          <Text>{props.title}</Text>
        </CustomText16>
      </ViewRow>
      <View
        style={{
          borderTopStartRadius: RFValue(32),
          borderTopEndRadius: RFValue(32),
          backgroundColor: Colors.WHITE,
          height: getHeight(39),
          width: '100%',
        }}></View>
    </>
  );
};
