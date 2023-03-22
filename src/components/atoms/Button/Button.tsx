import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity} from 'react-native';
import styles from './styles';
import {CustomText19, CustomTextSemiBold14} from '../Text/text';
type ButtonProps = {
  style?: StyleProp<TextStyle>;
  onpress?: () => void;
  title?: String;
  name?: any;
  children?: React.ReactNode,
};

export const DefaultButton = ({onpress, title, name,style,children}: ButtonProps) => (
  <TouchableOpacity style={[styles.StandardButtonContainer,style]} onPress={onpress}>
    <CustomTextSemiBold14>{title}{children} </CustomTextSemiBold14>
    <CustomText19>{name}</CustomText19>
  </TouchableOpacity>
);
export const TouchButton = ({style, onpress, title, name}: ButtonProps) => (
  <TouchableOpacity style={style} onPress={onpress}>
    <CustomTextSemiBold14>{title} </CustomTextSemiBold14>
    <CustomText19>{name}</CustomText19>
  </TouchableOpacity>
);
