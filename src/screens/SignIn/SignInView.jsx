import React from 'react';
import {View, Image} from 'react-native';
import {Button, Input, ViewRow} from '../../components/atoms';
import {CustomTextRgular14} from '../../components/atoms/Text/text';
import styles from './styles';
import {SimpleHeader} from '../../components/organisms/Header/Header';
import {images} from '../../assets';

export const SignIView = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <SimpleHeader
        title={'Login into account'}
        onpress={() => {
          console.log('go back');
        }}></SimpleHeader>

      <View style={styles.imagecontainer}>
        <Image style={styles.imagestyle} source={images.logo} />
        <CustomTextRgular14>Email</CustomTextRgular14>
        <Input
          icon={'SmsIcon'}
          password={false}
          editable={true}
          maxLength={40}
          keyboardType={'default'}
          secureTextEntry={false}
          onChangeText={() => {}}
          placeholder={'Enter your email...'}
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
          placeholder={'Enter your password...'}
        />
        <CustomTextRgular14 style={styles.forgotpassword}>
          Forgot Password ?
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
        <View></View>
      </View>
    </View>
  );
};
