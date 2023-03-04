import React, {useState} from 'react';
import Input from '../../components/atoms/InPut/input';
import {View, Image,Text,} from 'react-native';

import Button from '../../components/atoms/Button/Button';
import { CustomText16 ,CustomTextRgular14} from '../../components/atoms/Text/text';
import { ViewRow } from '../../components/atoms/ViewRow';
import styles from './styles';
import { SimpleHeader } from '../../components/organisms/Header/Header';




export const SignIView = () => {
  return (
    <View  >
   <SimpleHeader  onpress={()=>{console.log('go back')}}></SimpleHeader>
      <Input
       icon={'KeyIcon'}
        password={true}
        editable={true}
        maxLength={40}
        keyboardType={'default'}
        secureTextEntry={true}
        onChangeText={() => {}}
        placeholder={'Enter your email'}
      
      /> 
       <Button title={'Login'} onpress={()=>{console.log(' pressed')}} > </Button>
    <ViewRow style={styles.viewContainer} >
   
      <Text>ff</Text>
    </ViewRow>
  
    </View>
  );
};
