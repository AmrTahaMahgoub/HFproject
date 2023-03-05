import React, {useState} from 'react';
import Input from '../../components/atoms/InPut/input';
import {View, Image, Modal} from 'react-native';
import Button from '../../components/atoms/Button/Button';
import {CustomTextRgular14} from '../../components/atoms/Text/text';
import {ViewRow} from '../../components/atoms/ViewRow';
import styles from './styles';
import {SimpleHeader} from '../../components/organisms/Header/Header';
import {Colors} from '../../styles';
import {getHeight, getWidth, RFValue} from '../../config/dimensions';
import {images} from '../../assets';
import Toast from '../../components/atoms/ToastMessage/ToastMessage';

export const PasswardResretView = () => {
  const [showToast, setShowToast] = useState(false);

  const handlePress = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <View
      style={{height: getHeight(126.66), backgroundColor: Colors.PETROLUIM}}>
      <SimpleHeader
        title={'Reset password'}
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

        <Button title={'Send'} onpress={handlePress}></Button>
        <Modal visible={showToast} transparent>
          <Toast message="Password has been sent to your email" />
        </Modal>
      

        <ViewRow style={styles.mixedrow}>
          <CustomTextRgular14>Need help ? </CustomTextRgular14>
          <Button
            style={styles.contactus}
            title={'Contact us'}
            onpress={() => {
              console.log('contact us');
            }}></Button>
        </ViewRow>
      </View>
    </View>
  );
};
