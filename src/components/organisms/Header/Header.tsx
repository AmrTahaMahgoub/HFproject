import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import styles from './styles';
import {ViewRow} from '../../atoms/ViewRow';
import {SvgIcon} from '../../../assets/svgs';
import {CustomText16, CustomText18} from '../../atoms/Text/text';

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
        <View style={styles.listiconcontainer}>
          <SvgIcon name={'ListIcon'}></SvgIcon>
        </View>
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
