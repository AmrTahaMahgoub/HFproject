import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Image} from 'react-native';
import {Svg} from 'react-native-svg';
import styles from './style';
import SvgIcon from '../../../assets/svgs';
import {getHeight, RFValue, getWidth} from '../../../config/dimensions';
import ArrowBack from '../../../assets/svgs/ArrowBackIcon';
import ProfileIcon from '../../../assets/svgs/ProfileIcon';
import EyeSlashIcon from '../../../assets/svgs/EyeSlashIcon';
import { ViewRow } from '../ViewRow';

const Input = props => {
  const password = true;
  const showSvgIcon = true;

  [showPassword, setShowPassword] = useState(false);

  return (
    // <View
    //   style={{
    //     backgroundColor: 'white',
    //     justifyContent: 'space-between',
    //     flexDirection: 'row',
    //     alignItems: 'baseline',
    //     alignContent: 'center',
    //     alignSelf: 'baseline',
    //     borderRadius: RFValue(8),
    //     height: getHeight(48),
    //     width: getWidth(343),
    //   }}>
    //   <View
    //     style={{
    //       backgroundColor: 'white',
    //       flexDirection: 'row',
    //       alignItems: 'center',
    //       // alignContent: 'center',
    //       // alignSelf: 'center',
    //       height: getHeight(48),
    //       width: getWidth(300),
    //       borderRadius: RFValue(8),
    //     }}>
       
    //       <SvgIcon   name={props.icon} style={styles.icon}/>
        

    //     <TextInput
    //       editable={props.editable}
    //       maxLength={props.maxLength}
    //       keyboardType={props.keyboardType}
    //       secureTextEntry={showPassword}
    //       multiline={props.multiline}
    //       onChangeText={props.onChangeText}
    //       value={props.value}
    //       placeholder={props.placeholder}
    //       style={styles.inputStyle}
    //     />
    //   </View>
    //   {props.password && (
    //     <TouchableOpacity style={{ paddingRight: getWidth(16),paddingVertical:getHeight(16)}}
    //       onPress={() => {
    //         setShowPassword(!showPassword);
    //       }}>
    //       <SvgIcon  name={showPassword ? 'EyeSlashOffIcon' : 'EyeSlashIcon'} />
    //     </TouchableOpacity>
    //   )}
    // </View>
    <ViewRow style={styles.inputContainer}>
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
           <SvgIcon  name={showPassword ? 'EyeSlashOffIcon' : 'EyeSlashIcon'} style={styles.passwordButton}/>
         </TouchableOpacity>
       )}
    </ViewRow>
  );
};
export default Input;
