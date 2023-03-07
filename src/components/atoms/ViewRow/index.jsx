import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export const ViewRow = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
