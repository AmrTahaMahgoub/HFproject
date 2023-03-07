import React, {useState} from 'react';
import {View, Image, Modal} from 'react-native';
import {CustomTextRgular14} from '../../components/atoms/Text/text';
import styles from './styles';
import {SimpleHeader} from '../../components/organisms/Header/Header';
import {Colors} from '../../styles';
import {getHeight, getWidth} from '../../config/dimensions';
import {images} from '../../assets';
import {Button, Input, Toast, ViewRow} from '../../components/atoms';

export const PasswardResretView = ({navigation}) => {
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
          navigation.navigate('SignUpView');
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
