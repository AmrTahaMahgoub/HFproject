import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';

import styles from './styles';
type DataSpecificationContainerType = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
  title: String | undefined;
};
export const DataSpecificationContainer = ({
  children,
  style,
  title,
}: DataSpecificationContainerType) => {
  return (
    <View style={[styles.maincontainer, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.divider}></View>
      {children}
    </View>
  );
};
