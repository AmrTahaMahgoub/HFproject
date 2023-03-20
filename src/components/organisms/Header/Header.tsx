import React, {useState} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import styles from './styles';
import {ViewRow} from '../../atoms/ViewRow';
import {SvgIcon} from '../../../assets/svgs';
import {CustomText16, CustomText18} from '../../atoms/Text/text';
import {DefaultButton, TouchableTextSvg, SortedFilter} from '../../atoms';
import {ModalSheet} from '../../atoms/Modal/ModalSheet';

type SimpleHeaderProps = {
  title?: string;
  onPress?: () => void;
};

export const SimpleHeader = (props: SimpleHeaderProps) => {
  return (
    <>
      <ViewRow style={styles.simpleHeaderSearchbar}>
        <Pressable onPress={props.onPress}>
          <SvgIcon name={'ArrowBack'}></SvgIcon>
        </Pressable>
        <CustomText16 style={styles.headertitle}>
          <Text>{props.title}</Text>
        </CustomText16>
      </ViewRow>
      <View style={styles.blankcontainer}></View>
    </>
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
        <Pressable onPress={props.onPressed}>
          <SvgIcon name={'ArrowBack'}></SvgIcon>
        </Pressable>
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
                title={'Date ( Oldest post first )'}></TouchableTextSvg>
              <TouchableTextSvg
                title={'Date ( Newest post first )'}></TouchableTextSvg>
              <TouchableTextSvg
                title={'Price ( Lowest first )'}></TouchableTextSvg>
              <TouchableTextSvg
                title={'Price ( Highest first )'}></TouchableTextSvg>
              <TouchableTextSvg
                title={'Area ( Smallest area )'}></TouchableTextSvg>
              <TouchableTextSvg
                title={'Area ( Largest area )'}></TouchableTextSvg>
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
          <SvgIcon name={'ArrowBack'}></SvgIcon>
        </Pressable>
      )}
      <CustomText18 style={styles.mainheadertitle}>
        <Text>{props.title}</Text>
      </CustomText18>
    </ViewRow>
  );
};
