import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import {Svg} from 'react-native-svg';
import styles from './style';
import SvgIcon from '../../../assets/svgs';
import {getHeight, RFValue} from '../../../config/dimensions';
import ArrowBack from '../../../assets/svgs/ArrowBackIcon';
import ProfileIcon from '../../../assets/svgs/ProfileIcon';
import EyeSlashIcon from '../../../assets/svgs/EyeSlashIcon';


const Input = props => {
  const password = true;
  const showSvgIcon=true;

  [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={{
        backgroundColor:"white",
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:RFValue(8),
        height: getHeight(48),
        width: getHeight(343),
      

      }}>
        <SvgIcon name={''}/>
        
      <TextInput
     
        editable={props.editable}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        secureTextEntry={showPassword}
        multiline={props.multiline}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        style={styles.inputStyle}
      />
     
  
     {props.password &&  <TouchableOpacity
        onPress={() => {
          setShowPassword(!showPassword);
        }}>
       
          <SvgIcon
            //rotate={"right"}
            name={showPassword ? 'EyeSlashOffIcon' : 'EyeSlashIcon'}
         
            width={RFValue(30, 812)}
            height={RFValue(30, 812)}
          />
        
      </TouchableOpacity>}
    </View>
  );
};
export default Input;
