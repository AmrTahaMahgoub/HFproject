import React from 'react';
import Input from '../../components/atoms/InPut/input';
import {View, Image, Text, Pressable} from 'react-native';
import Button from '../../components/atoms/Button/Button';
import {CustomTextRgular14} from '../../components/atoms/Text/text';
import {ViewRow} from '../../components/atoms/ViewRow';
import styles from './styles';
import {SimpleHeader} from '../../components/organisms/Header/Header';
import {Colors} from '../../styles';
import {getHeight, getWidth, RFValue} from '../../config/dimensions';
import {images} from '../../assets';

export const SignIView=({navigation})=> {
  return (
    <View
      style={{height: getHeight(126.66), backgroundColor: Colors.PETROLUIM}}>
      <SimpleHeader
        title={'Login into account'}
        onpress={() => {
          console.log('go back');
        }}></SimpleHeader>

      <View
        style={{
          height: getHeight(668),
          paddingHorizontal: getWidth(16),
          backgroundColor: Colors.WHITE,
          paddingTop: getHeight(30),
        }}>
        <Image
          style={{
            width: getWidth(140),
            height: getHeight(140),
            alignSelf: 'center',
          }}
          source={images.logo}
        />
        <CustomTextRgular14>Email</CustomTextRgular14>
        <Input
          icon={'SmsIcon'}
          password={false}
          editable={true}
          maxLength={40}
          keyboardType={'default'}
          secureTextEntry={false}
          onChangeText={() => {}}
          placeholder={'Enter your email'}
        />
        <CustomTextRgular14>Password</CustomTextRgular14>
        <Input
          icon={'KeyIcon'}
          password={true}
          editable={true}
          maxLength={40}
          keyboardType={'default'}
          secureTextEntry={true}
          onChangeText={() => {}}
          placeholder={'Enter your password'}
        />
        <CustomTextRgular14 style={styles.forgotpassword}>
          Forgot Password?{' '}
        </CustomTextRgular14>
        <Button
          title={'Login'}
          onpress={() => {
            console.log(' pressed');
          }}></Button>

        <ViewRow style={styles.mixedrow}>
          <CustomTextRgular14>Don’t have account? </CustomTextRgular14>
          <Button
            style={styles.registernow}
            title={'Register now'}
            onpress={() => {
              navigation.navigate('SignUpView');
            }}></Button>
        </ViewRow>
        <View>
        
        </View>
      </View>
    </View>
  );
}

