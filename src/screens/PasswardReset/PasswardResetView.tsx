import React, {useState} from 'react';
import {View, Image, Modal} from 'react-native';
import {CustomTextRgular14} from '../../components/atoms/Text/text';
import styles from './styles';
import {SimpleHeader} from '../../components/organisms/Header/Header';
import {images} from '../../assets';
import {Toast, ViewRow} from '../../components/atoms';
import {StackNavigationProp} from '@react-navigation/stack';

import {Input, DefaultButton} from '../../components/atoms';
import {TouchButton} from '../../components/atoms/Button/Button';
import { StackNavigatorParamList } from '../../navigations/types';


type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};


export const PasswardResretView = ({navigation}: NavigationProps) => {
  const [showToast, setShowToast] = useState(false);

  const handlePress = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <View style={styles.maincontainer}>
      <SimpleHeader
        title={'Reset password'}
        onPress={() => {
          navigation.navigate('SignUpView');
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
          placeholder={'Enter your email'}
        />

        <DefaultButton
          title={'Send'}
          onpress={handlePress}
          style={undefined}></DefaultButton>
        <Modal visible={showToast} transparent>
          <Toast message="Password has been sent to your email" />
        </Modal>

        <ViewRow style={styles.mixedrow}>
          <CustomTextRgular14>Need help ? </CustomTextRgular14>
          <TouchButton
            style={styles.contactus}
            title={'Contact us'}
            onpress={() => {
              console.log('contact us');
            }}></TouchButton>
        </ViewRow>
      </View>
    </View>
  );
};
