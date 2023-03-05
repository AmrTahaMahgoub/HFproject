import {Text, View} from 'react-native';
import React from 'react';
import styles from './style';

export const CustomText16 = ({children, style}) => {
  return <Text style={[styles.semibold16, style]}>{children}</Text>;
};

export const CustomText19 = ({children, style}) => {
  return <Text style={[styles.bold19, style]}>{children}</Text>;
};
export const CustomTextRgular14 = ({children, style}) => {
  return <Text style={[styles.regular14, style]}>{children}</Text>;
};
export const CustomTextSemiBold14 = ({children, style}) => {
  return <Text style={[styles.semibold14, style]}>{children}</Text>;
};
