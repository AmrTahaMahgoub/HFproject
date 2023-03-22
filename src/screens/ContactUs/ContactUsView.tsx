import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {images} from '../../assets';
import {SvgIcon} from '../../assets/svgs';
import {
  CustomCheckBox,
  DefaultButton,
  IconText,
  Input,
  ViewRow,
} from '../../components/atoms';
import {CustomTextRgular14} from '../../components/atoms/Text/text';
import {MainHeader} from '../../components/organisms/Header/Header';
import {StackNavigatorParamList} from '../../navigations/types';
import {Strings} from '../../styles';
import styles from './styles';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const ContactUsView = ({navigation}: NavigationProps) => {
  return (
    <ScrollView>
      <View>
        <MainHeader
          IsIconShown={true}
          onPressed={() => {
            navigation.goBack();
          }}
          title={'Contact us'}></MainHeader>
      </View>
      <View style={styles.firstcontainer}>
        <View style={styles.textcontainer}>
          <Text style={styles.getintouch}>{Strings.GETINTOUCH}</Text>
          <IconText
            svgname="PetroluimCallNow"
            texttitle={'00201000066460'}
            textstyle={styles.phonenumber}></IconText>
          <IconText
            svgname="PetroluimMessage"
            texttitle={'info@appname.com'}
            textstyle={styles.phonenumber}></IconText>
        </View>
        <Image source={images.contactus} style={styles.image}></Image>
      </View>
      <Text style={styles.centeredtext}>
        {Strings.YOUCANREACH} {'\n'} {Strings.OUTTHEFORM}
      </Text>
      <View style={styles.largestcontainer}>
        <Text style={styles.title}>{Strings.FULLNAME}</Text>
        <Input
          textinputstyle={styles.textinput}
          icon={'ProfileIcon'}
          password={false}
          editable={true}
          maxLength={40}
          keyboardType={'default'}
          secureTextEntry={false}
          onChangeText={() => {}}
          placeholder={'Enter your name...'}
        />
        <Text style={styles.title}>{Strings.EMAIL}</Text>
        <Input
          textinputstyle={styles.textinput}
          icon={'SmsIcon'}
          password={false}
          editable={true}
          maxLength={40}
          keyboardType={'default'}
          secureTextEntry={false}
          onChangeText={() => {}}
          placeholder={'Enter your Email...'}
        />
        <Text style={styles.title}>{Strings.PHONE}</Text>
        <Input
          textinputstyle={styles.textinput}
          icon={'HeadPhoneIcon'}
          password={false}
          editable={true}
          maxLength={40}
          keyboardType={'default'}
          secureTextEntry={false}
          onChangeText={() => {}}
          placeholder={'Ex: 00201032000000'}
        />
        <Text style={styles.title}>{Strings.MESSAGE}</Text>
        <Input
          textinputstyle={styles.messagetextinput}
          password={false}
          editable={true}
          maxLength={40}
          keyboardType={'default'}
          secureTextEntry={false}
          onChangeText={() => {}}
        />
      </View>
      <ViewRow style={styles.termsconditionrow}>
        <CustomCheckBox></CustomCheckBox>
        <CustomTextRgular14>{Strings.IAGREETOO}</CustomTextRgular14>
        <CustomTextRgular14 style={{textDecorationLine: 'underline'}}>
          {Strings.TERMSCONDITIONS}
        </CustomTextRgular14>
      </ViewRow>
      <DefaultButton>
        <ViewRow>
          <Text style={styles.send}>{Strings.SEND}</Text>
          <SvgIcon name={'SendIcon'}></SvgIcon>
        </ViewRow>
      </DefaultButton>
    </ScrollView>
  );
};
