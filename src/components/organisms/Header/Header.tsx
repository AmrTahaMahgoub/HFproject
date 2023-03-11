import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {getHeight} from '../../../config/dimensions';
import {Colors} from '../../../styles';
import styles from './styles';
import {ViewRow} from '../../atoms/ViewRow';
import {SvgIcon} from '../../../assets/svgs';
import {CustomText16} from '../../atoms/Text/text';
import {RFValue} from '../../../config/dimensions';
type SimpleHeaderProps = {
  title?: string;
  onPress?: () => void;
};

export const SimpleHeader = (props: SimpleHeaderProps) => {
  return (
    <>
      <ViewRow style={styles.contentHeader}>
        <Pressable onPress={props.onPress}>
          <SvgIcon name={'ArrowBack'}></SvgIcon>
        </Pressable>
        <CustomText16 style={styles.name}>
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
