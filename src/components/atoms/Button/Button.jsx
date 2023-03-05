import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {CustomText19, CustomTextSemiBold14} from '../Text/text';

const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.StandardButtonContainer, props.style]}
      onPress={props.onpress}
      {...props}>
        
      <CustomTextSemiBold14 {...props}> {props.title}</CustomTextSemiBold14>
      <CustomText19 {...props}>{props.name}</CustomText19>
      
    </TouchableOpacity>
  );
};
export default Button;
