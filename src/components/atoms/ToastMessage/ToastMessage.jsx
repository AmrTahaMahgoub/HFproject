import React from 'react';
import {Text} from 'react-native';
import SvgIcon from '../../../assets/svgs';
import {ViewRow} from '../ViewRow';
import styles from './styles';

export const Toast = ({message}) => {
  return (
    <ViewRow style={styles.box}>
      <SvgIcon name={'PasswordSentIcon'}></SvgIcon>
      <Text style={styles.title}>{message}</Text>
    </ViewRow>
  );
};


