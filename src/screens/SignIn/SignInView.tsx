import React from 'react';
import { View, Image } from 'react-native';
import { Input, ViewRow } from '../../components/atoms';
import { CustomTextRgular14 } from '../../components/atoms/Text/text';
import styles from './styles';
import { SimpleHeader } from '../../components/organisms/Header/Header';
import { images } from '../../assets';
import { DefaultButton, TouchButton } from '../../components/atoms/Button/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParamList } from '../../navigations/types';
import { Strings } from '../../styles';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = { navigation: ScreenNavigationProp };

export const SignIView = ({ navigation }: NavigationProps) => {
  const headerHeight = useSharedValue(100);
  const headerFontSize = useSharedValue(16);
  const imageHight = useSharedValue(150);
  const imageWidth = useSharedValue(150);

  const handleFocus = () => {
    headerHeight.value = withTiming(0, { duration: 500, easing: Easing.inOut(Easing.ease) });
    headerFontSize.value = withTiming(12, { duration: 500, easing: Easing.inOut(Easing.ease) });
    imageHight.value = withTiming(50, { duration: 500, easing: Easing.inOut(Easing.ease) });
    imageWidth.value = withTiming(50, { duration: 500, easing: Easing.inOut(Easing.ease) });
  };

  const handleBlur = () => {
    headerHeight.value = withTiming(100, { duration: 500, easing: Easing.inOut(Easing.ease) });
    headerFontSize.value = withTiming(16, { duration: 500, easing: Easing.inOut(Easing.ease) });
    imageHight.value = withTiming(150, { duration: 500, easing: Easing.inOut(Easing.ease) });
    imageWidth.value = withTiming(150, { duration: 500, easing: Easing.inOut(Easing.ease) });
  };
  const imageHeightStyle = useAnimatedStyle(() => {
    return {
      height: imageHight.value
    }
  });
  const imageWidthStyle = useAnimatedStyle(() => {
    return {
      width: imageWidth.value
    }
  });
  const headerStyle = useAnimatedStyle(() => {
    return {
      height: headerHeight.value,
    };
  });

  const headerTextStyle = useAnimatedStyle(() => {
    return {
      fontSize: headerFontSize.value,
    };
  });

  return (
    <View style={styles.maincontainer}>
      <Animated.View style={headerStyle}>
        <SimpleHeader
          animatedStyle={headerTextStyle}
          title={'Login into account'}
          onPress={() => {
            console.log('go back');
          }}></SimpleHeader>
      </Animated.View>

      <View style={styles.imagecontainer}>
        <Animated.Image style={[styles.imagestyle,imageHeightStyle,imageWidthStyle]} source={images.logo} />
        <CustomTextRgular14>{Strings.EMAIL}</CustomTextRgular14>
        <Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          icon={'SmsIcon'}
          password={false}
          editable={true}
          maxLength={40}
          keyboardType={'default'}
          secureTextEntry={false}
          onChangeText={() => { }}
          placeholder={'Enter your email...'}
        />
        <CustomTextRgular14>{Strings.PASSWORD}</CustomTextRgular14>
        <Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          icon={'KeyIcon'}
          password={true}
          editable={true}
          maxLength={40}
          keyboardType={'default'}
          secureTextEntry={true}
          onChangeText={() => { }}
          placeholder={'Enter your password...'}
        />
        <CustomTextRgular14 style={styles.forgotpassword}>
          {Strings.FORGOTPASSWORD}
        </CustomTextRgular14>
        <DefaultButton
          title={'Login'}
          onpress={() => {
            navigation.navigate('PasswardResretView');
          }}
          style={undefined}></DefaultButton>

        <ViewRow style={styles.mixedrow}>
          <CustomTextRgular14>{Strings.DONTHAVEACCOUNT}</CustomTextRgular14>
          <TouchButton
            style={styles.registernow}
            title={'Register now'}
            onpress={() => {
              navigation.navigate('SignUpView');
            }}></TouchButton>
        </ViewRow>
      </View>
    </View>
  );
};
