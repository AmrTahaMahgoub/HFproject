import {StyleProp, Text, TextStyle} from 'react-native';
import React from 'react';
import styles from './style';

type CustomTextProps = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
};
export const CustomText16 = ({children, style}: CustomTextProps) => {
  return <Text style={[styles.semibold16, style]}>{children}</Text>;
};

export const CustomText19 = ({children, style}: CustomTextProps) => {
  return <Text style={[styles.bold19, style]}>{children}</Text>;
};
export const CustomTextRgular14 = ({children, style}: CustomTextProps) => {
  return <Text style={[styles.regular14, style]}>{children}</Text>;
};
export const CustomTextSemiBold14 = ({children, style}: CustomTextProps) => {
  return <Text style={[styles.semibold14, style]}>{children}</Text>;
};
export const CustomText18 = ({children, style}: CustomTextProps) => {
  return <Text style={[styles.bold18, style]}>{children}</Text>;
};
