import React from 'react';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';
import styles from './styles';
type ViewRowProps={
  children?: React.ReactNode,
  style?: StyleProp<TextStyle> | undefined;
}

export const ViewRow = ({children, style}:ViewRowProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
