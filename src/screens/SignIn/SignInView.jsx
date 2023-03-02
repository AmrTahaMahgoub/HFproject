import React, {useState} from 'react';
import Input from '../../components/atoms/InPut/input';
import {View, Image} from 'react-native';
import ArrowBack from '../../assets/svgs/ArrowBackIcon';
import SvgIcon from '../../assets/svgs';
import {RFValue} from '../../config/dimensions';

export const SignIView = () => {
  return (
    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      <Input
      
        password={false}
        editable={true}
       // showSvgIcon={true}
        keyboardType={'default'}
        secureTextEntry={true}
        onChangeText={() => {}}
        placeholder={'enter your email'}
      />
    </View>
  );
};
