import {StackNavigationProp} from '@react-navigation/stack';
import React, { useCallback, useMemo, useRef, useState } from 'react';



import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomAccountBox, CustomSharedData, DefaultButton, ModalSheet, TouchableTextSvg} from '../../components/atoms';
import {
  ComplexHeader,
  MainHeader,
} from '../../components/organisms/Header/Header';
import {BottomTabNavigatorTypes} from '../../navigations/types';
import {ACCOUNT} from '../../redux/Api/GetData';
import styles from './styles';
/**/


type ScreenNavigationProp = StackNavigationProp<BottomTabNavigatorTypes>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const AccountView = ({navigation}: NavigationProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggle = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <MainHeader title={'Account'}></MainHeader>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ACCOUNT}
        renderItem={({item}) => (
          <CustomAccountBox
            image={item.image}
            name={item.name}
            email={item.email}></CustomAccountBox>
        )}></FlatList>

      <CustomSharedData
      
        icon="ProfileCircle"
        title={'profile'}></CustomSharedData>
      <CustomSharedData
      onpress={toggle}
        icon="InternetCircule"
        title={'Change language'}></CustomSharedData>
          <ModalSheet
          isVisible={isModalVisible}
          onSwipeComplete={() => {
            setModalVisible(!isModalVisible);
          }}
          swipeDirection={'down'}>
          <View style={styles.mainmodalcontainer}>
            <View style={styles.divider}></View>
            <Text style={styles.maintitle}>Change language</Text>
            <View style={styles.textmodalcontainer}>
              <TouchableTextSvg
                title={'Arabic'}></TouchableTextSvg>
              <TouchableTextSvg
                title={'English'}></TouchableTextSvg>
              <TouchableTextSvg
                title={'Turkish'}></TouchableTextSvg>
            
            </View>
            <DefaultButton
              title={'change'}
              onpress={() => {
                setModalVisible(false);
              }}
              style={styles.button}></DefaultButton>
          </View>
        </ModalSheet>
      <CustomSharedData
        icon="ExcelemationCircule"
        title={'About us'}></CustomSharedData>
      <CustomSharedData
        icon="MessageEdit"
        title={'Contact us'}></CustomSharedData>
    </View>
  );
};

