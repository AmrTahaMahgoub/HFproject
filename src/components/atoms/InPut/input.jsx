import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import SvgIcon from '../../../assets/svgs';
import {ViewRow} from '../ViewRow';

const Input = props => {
  const password = true;
  const showSvgIcon = true;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <ViewRow style={styles.container}>
      <SvgIcon name={props.icon} style={styles.lefticon}></SvgIcon>
      <TextInput
        editable={props.editable}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        secureTextEntry={showPassword}
        multiline={props.multiline}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        style={styles.inputStyle}></TextInput>

      {props.password && (
        <TouchableOpacity
          onPress={() => {
            setShowPassword(!showPassword);
          }}>
          <SvgIcon
            name={showPassword ? 'EyeSlashIcon' : 'EyeSlashOffIcon'}
            style={styles.passwordButton}
          />
        </TouchableOpacity>
      )}
    </ViewRow>
  );
};
export default Input;
