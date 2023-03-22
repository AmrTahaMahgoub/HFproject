import React from 'react';
import {View, Image} from 'react-native';
import { Input, ViewRow} from '../../components/atoms';
import {CustomTextRgular14} from '../../components/atoms/Text/text';
import styles from './styles';
import {SimpleHeader} from '../../components/organisms/Header/Header';
import {images} from '../../assets';
import {DefaultButton, TouchButton} from '../../components/atoms/Button/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import { StackNavigatorParamList } from '../../navigations/types';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};


export const SignIView = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.maincontainer}>
      <SimpleHeader
        title={'Login into account'}
        onPress={() => {
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
        <DefaultButton
          title={'Login'}
          onpress={() => {
            navigation.navigate('PasswardResretView');
          }}
          style={undefined}></DefaultButton>

        <ViewRow style={styles.mixedrow}>
          <CustomTextRgular14>Don’t have account? </CustomTextRgular14>
          <TouchButton
            style={styles.registernow}
            title={'Register now'}
            onpress={() => {
              navigation.navigate('SignUpView');
            }}></TouchButton>
        </ViewRow>
        <View></View>
      </View>
    </View>
  );
};
