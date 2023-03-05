import Input from '../../components/atoms/InPut/input';
import {View, Image,ScrollView} from 'react-native';
import Button from '../../components/atoms/Button/Button';
import {CustomTextRgular14} from '../../components/atoms/Text/text';
import {ViewRow} from '../../components/atoms/ViewRow';
import styles from './styles';
import {SimpleHeader} from '../../components/organisms/Header/Header';
import {Colors} from '../../styles';
import {getHeight, getWidth} from '../../config/dimensions';
import {images} from '../../assets';
import CustomCheckBox from '../../components/atoms/CheckBox/CustomCheckBox';

export const SignUpView = () => {
  return (
   
      <View
      style={{height: getHeight(126.66), backgroundColor: Colors.PETROLUIM}}>
      <SimpleHeader
        title={'Register new account'}
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

        <CustomTextRgular14>Name</CustomTextRgular14>
        <Input
          icon={'ProfileIcon'}
          password={false}
          editable={true}
          maxLength={40}
          keyboardType={'default'}
          secureTextEntry={false}
          onChangeText={() => {}}
          placeholder={'Enter your name'}
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
          placeholder={'01069636927'}
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
          placeholder={'Enter your paswword'}
        />
        <ViewRow>
          <CustomCheckBox></CustomCheckBox>
          <CustomTextRgular14>I agree to Terms & Conditions</CustomTextRgular14>
        </ViewRow>
        <Button
          title={'Login'}
          onpress={() => {
            console.log(' pressed');
          }}></Button>

        <ViewRow style={styles.mixedrow}>
          <CustomTextRgular14>Have account? </CustomTextRgular14>
          <Button
            style={styles.registernow}
            title={'Login'}
            onpress={() => {
              console.log('Have account?');
            }}></Button>
        </ViewRow>
      </View>
    </View>
   
  );
};
