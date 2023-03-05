import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Image} from 'react-native';
import {Svg} from 'react-native-svg';
import styles from './style';
import SvgIcon from '../../../assets/svgs';
import {getHeight, RFValue, getWidth} from '../../../config/dimensions';
import ArrowBack from '../../../assets/svgs/ArrowBackIcon';
import ProfileIcon from '../../../assets/svgs/ProfileIcon';
import EyeSlashIcon from '../../../assets/svgs/EyeSlashIcon';
import {ViewRow} from '../ViewRow';

const Input = props => {
  const password = true;
  const showSvgIcon = true;

  [showPassword, setShowPassword] = useState(false);

  return (
    <ViewRow style={styles.innercontainer}>
      <ViewRow>
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
      </ViewRow>
      <ViewRow>
        {props.password && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            <SvgIcon
              name={showPassword ? 'EyeSlashOffIcon' : 'EyeSlashIcon'}
              style={styles.passwordButton}
            />
          </TouchableOpacity>
        )}
      </ViewRow>
    </ViewRow>
  );
};
export default Input;
