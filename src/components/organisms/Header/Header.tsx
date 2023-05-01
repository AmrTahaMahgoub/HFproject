import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, ImageBackground, StyleProp, TextStyle } from 'react-native';
import styles from './styles';
import { ViewRow } from '../../atoms/ViewRow';
import { SvgIcon } from '../../../assets/svgs';
import { CustomText16 } from '../../atoms/Text/text';
import { DefaultButton, TouchableTextSvg, SortedFilter } from '../../atoms';
import { ModalSheet } from '../../atoms/Modal/ModalSheet';
import { getHeight, getWidth, RFValue } from '../../../config/dimensions';
import { Colors, Typography } from '../../../styles';
import Animated from 'react-native-reanimated';

type SimpleHeaderProps = {
  animatedStyle?: any
  style?: any;
  title?: string;
  onPress?: () => void;
};

export const SimpleHeader = (props: SimpleHeaderProps) => {
  return (
    <View style={props.style}>
      <ViewRow style={styles.simpleHeaderSearchbar}>
        <Pressable onPress={props.onPress}>
          <SvgIcon name={'ArrowBack'}></SvgIcon>
        </Pressable>

        <Animated.Text style={[{
          fontFamily: Typography.SEMIBOLD_NUNITO,
          fontSize: Typography.FONT_SIZE_16,
          color: Colors.WHITE,
          textAlign: 'center',
          flex: 1,
          flexWrap: 'wrap',
        }, props.animatedStyle]}>{props.title}</Animated.Text>

      </ViewRow >
      {/* <View style={styles.blankcontainer}></View> */}
    </View>
  );
};

type ComplexHeaderProps = {
  title?: String;
  onPressed?: () => void;
};
export const ComplexHeader = (props: ComplexHeaderProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggle = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.complexheader}>
      <ViewRow style={styles.searchbar}>
        <CustomText16 style={styles.headertitle}>
          <Text>{props.title}</Text>
        </CustomText16>
      </ViewRow>
      <ViewRow style={styles.searchinputview}>
        <ViewRow style={styles.searchinputtext}>
          <SvgIcon
            name={'SearchIcon'}
            style={styles.lefticonsearchbar}></SvgIcon>

          <TextInput
            editable={true}
            maxLength={40}
            keyboardType="default"
            secureTextEntry={true}
            multiline={false}
            placeholder="Search..."
            style={styles.inputStyle}></TextInput>
        </ViewRow>

        <SortedFilter onPressed={toggle}></SortedFilter>
        <ModalSheet
          isVisible={isModalVisible}
          onSwipeComplete={() => {
            setModalVisible(!isModalVisible);
          }}
          swipeDirection={'down'}>
          <View style={styles.maincontainer}>
            <View style={styles.divider}></View>
            <Text style={styles.maintitle}>SORTING BY</Text>
            <View style={styles.textcontainer}>
              <TouchableTextSvg
                title={'Date ( Oldest post first )'}
                iconname="BlueCheckIcon"></TouchableTextSvg>
              <TouchableTextSvg
                title={'Date ( Newest post first )'}
                iconname="BlueCheckIcon"></TouchableTextSvg>
              <TouchableTextSvg
                title={'Price ( Lowest first )'}
                iconname="BlueCheckIcon"></TouchableTextSvg>
              <TouchableTextSvg
                title={'Price ( Highest first )'}
                iconname="BlueCheckIcon"></TouchableTextSvg>
              <TouchableTextSvg
                title={'Area ( Smallest area )'}
                iconname="BlueCheckIcon"></TouchableTextSvg>
              <TouchableTextSvg
                title={'Area ( Largest area )'}
                iconname="BlueCheckIcon"></TouchableTextSvg>
            </View>
            <DefaultButton
              title={'Done'}
              onpress={() => {
                setModalVisible(false);
              }}
              style={styles.button}></DefaultButton>
          </View>
        </ModalSheet>
      </ViewRow>
    </View>
  );
};
type MainHeaderProps = {
  title?: String;
  onPressed?: () => void;
  IsIconShown?: Boolean;
};
export const MainHeader = (props: MainHeaderProps) => {
  return (
    <ViewRow style={styles.mainheader}>
      {props.IsIconShown && (
        <Pressable onPress={props.onPressed}>
          <SvgIcon name={'ArrowBack'} ></SvgIcon>
        </Pressable>
      )}
      <Text style={styles.mainheadertitle}>{props.title}</Text>
    </ViewRow>
  );
};
export const ImageHeader = ({ image, onPress }: any) => {
  return (
    <View>
      <ImageBackground
        source={image}
        style={{ height: getHeight(276), width: '100%' }}>
        <ViewRow
          style={{
            justifyContent: 'space-between',
            marginHorizontal: getWidth(20),
          }}>
          <Pressable onPress={onPress}>
            <SvgIcon name="ArrowBack"></SvgIcon>
          </Pressable>

          <View
            style={{
              backgroundColor: Colors.DARKY_LIGHT_GRAY,
              width: getWidth(40),
              height: getHeight(40),

              borderRadius: RFValue(50),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable>
              <SvgIcon
                name="FavoriteIcon"
                style={{
                  marginHorizontal: getWidth(10),
                  marginVertical: getHeight(10),
                }}></SvgIcon>
            </Pressable>
          </View>
        </ViewRow>
      </ImageBackground>
    </View>
  );
};
