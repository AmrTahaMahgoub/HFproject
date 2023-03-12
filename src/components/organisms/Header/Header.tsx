import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {getHeight, getWidth} from '../../../config/dimensions';
import {Colors} from '../../../styles';
import styles from './styles';
import {ViewRow} from '../../atoms/ViewRow';
import {SvgIcon} from '../../../assets/svgs';
import {CustomText16} from '../../atoms/Text/text';
import {RFValue} from '../../../config/dimensions';
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
      <View
        style={{
          borderTopStartRadius: RFValue(32),
          borderTopEndRadius: RFValue(32),
          backgroundColor: Colors.WHITE,
          height: getHeight(39),
          width: '100%',
        }}></View>
    </>
  );
};

type ComplexHeaderProps = {
  title?: String;
  onPressed?: () => void;
};
export const ComplexHeader = (props: ComplexHeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: Colors.PETROLUIM,
        height: getHeight(112),
         paddingTop: getHeight(10),
         borderBottomLeftRadius:RFValue(16),
         borderBottomRightRadius:RFValue(16),
      }}>
      <ViewRow style={styles.searchbar}>
        <Pressable onPress={props.onPressed}>
          <SvgIcon name={'ArrowBack'} ></SvgIcon>
        </Pressable>
        <CustomText16 style={styles.headertitle}>
          <Text>{props.title}</Text>
        </CustomText16>
      </ViewRow>
      <ViewRow
        style={{
          justifyContent: 'space-between',
          marginHorizontal: getWidth(16),
           marginVertical: getHeight(14),
         
        }}>
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
          <SvgIcon name={'ListIcon'} style={styles.listicon}></SvgIcon>
        </View>
      </ViewRow>
    </View>
  );
};
//<View style={styles.listiconcontainer}></View>
