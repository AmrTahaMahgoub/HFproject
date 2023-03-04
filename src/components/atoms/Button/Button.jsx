import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {CustomTextSemiBold14} from '../Text/text';

const Button = props => {
  return (
    <TouchableOpacity style={styles.StandardButtonContainer} onPress={props}
    >
     <CustomTextSemiBold14> {props.title}</CustomTextSemiBold14>
    </TouchableOpacity>
  );
};
export default Button;
