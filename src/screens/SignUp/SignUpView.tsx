import {View, Image, ScrollView} from 'react-native';
import {Button, CustomCheckBox, Input, ViewRow} from '../../components/atoms';
import {
  CustomText16,
  CustomTextRgular14,
} from '../../components/atoms/Text/text';
import styles from './styles';
import {SimpleHeader} from '../../components/organisms/Header/Header';

import {images} from '../../assets';
import {DefaultButton, TouchButton} from '../../components/atoms/Button/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import { StackNavigatorParamList } from '../../navigations/types';


type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};


export const SignUpView = ({navigation}: NavigationProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.maincontainer}>
        <SimpleHeader
          title={'Register new account'}
          onPress={() => {
            navigation.navigate('SignInView');
          }}></SimpleHeader>

        <View style={styles.imagecontainer}>
          <Image style={styles.imagestyle} source={images.logo} />

          <CustomTextRgular14>Name</CustomTextRgular14>
          <Input
            icon={'ProfileIcon'}
            password={false}
            editable={true}
            maxLength={40}
            keyboardType={'default'}
            secureTextEntry={false}
            onChangeText={() => {}}
            placeholder={'Enter your name...'}
          />
          <CustomTextRgular14>Phone</CustomTextRgular14>
          <Input
            icon={'HeadPhoneIcon'}
            password={false}
            editable={true}
            maxLength={40}
            keyboardType={'default'}
            secureTextEntry={true}
            onChangeText={() => {}}
            placeholder={'EX:01069636927'}
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
          <ViewRow>
            <CustomCheckBox></CustomCheckBox>
            <CustomTextRgular14>I agree to</CustomTextRgular14>
            <CustomTextRgular14 style={styles.termsandcondition}>
              Terms & Conditions
            </CustomTextRgular14>
          </ViewRow>
          <DefaultButton
            title={'Register'}
            onpress={() => {
              navigation.navigate('BottomTabNavigator');
              console.log(' Registered');
            }}></DefaultButton>

          <ViewRow style={styles.mixedrow}>
            <CustomTextRgular14>Have account? </CustomTextRgular14>
            <TouchButton
              style={styles.registernow}
              title={'Login'}
              onpress={() => {
                navigation.navigate('SignInView');
              }}></TouchButton>
          </ViewRow>
        </View>
      </View>
    </ScrollView>
  );
};
