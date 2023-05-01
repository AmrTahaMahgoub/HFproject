import {View, Image, ScrollView} from 'react-native';
import {CustomCheckBox, Input, ViewRow} from '../../components/atoms';
import {CustomTextRgular14} from '../../components/atoms/Text/text';
import styles from './styles';
import {SimpleHeader} from '../../components/organisms/Header/Header';
import {images} from '../../assets';
import {DefaultButton, TouchButton} from '../../components/atoms/Button/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamList} from '../../navigations/types';
import {Strings} from '../../styles';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};


export const SignUpView = ({navigation}: NavigationProps) => {
  return (
    
      <View style={styles.maincontainer}>
        <SimpleHeader
          title={'Register new account'}
          onPress={() => {
            navigation.navigate('SignInView');
          }}></SimpleHeader>

        <View style={styles.imagecontainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={styles.imagestyle} source={images.logo} />

          <CustomTextRgular14>{Strings.NAME}</CustomTextRgular14>
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
          <CustomTextRgular14>{Strings.PHONE}</CustomTextRgular14>
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
          <CustomTextRgular14>{Strings.EMAIL}</CustomTextRgular14>
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
          <CustomTextRgular14>{Strings.PASSWORD}</CustomTextRgular14>
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
            <CustomTextRgular14>{Strings.IAGREETO}</CustomTextRgular14>
            <CustomTextRgular14 style={styles.termsandcondition}>
              {Strings.TERMSCONDITIONS}
            </CustomTextRgular14>
          </ViewRow>
          <DefaultButton
            title={'Register'}
            onpress={() => {
              navigation.navigate('BottomTabNavigator');
              console.log(' Registered');
            }}></DefaultButton>

          <ViewRow style={styles.mixedrow}>
            <CustomTextRgular14>{Strings.HAVEACCOUNT}</CustomTextRgular14>
            <TouchButton
              style={styles.registernow}
              title={'Login'}
              onpress={() => {
                navigation.navigate('SignInView');
              }}></TouchButton>
          </ViewRow>
          </ScrollView>
        </View>
        
      </View>

  );
};