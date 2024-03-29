import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './style';
import {ViewRow} from '../ViewRow';
import {SvgIcon} from '../../../assets/svgs';
import {IconsName} from '../../../@types/iconTypes';

type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  inputStyle?: StyleProp<TextStyle> | undefined;
  multiline?: boolean;
  password?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  maxLength?: number;
  style?: StyleProp<ViewStyle> | undefined;
  textinputstyle?: StyleProp<TextStyle> | undefined;
  icon?: IconsName;
  error?: string;
  withFlag?: boolean;
  editable?: boolean;
  name?: String;
  secureTextEntry?: boolean;
  onFocus?:any
  onBlur?:any
};

export const Input = (props: InputProps) => {
  const showSvgIcon = true;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <ViewRow style={[styles.container, props.textinputstyle]}>
      <SvgIcon name={props.icon} style={styles.lefticon}></SvgIcon>
      <TextInput
      onBlur={props.onBlur}
      onFocus={props.onFocus}
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
