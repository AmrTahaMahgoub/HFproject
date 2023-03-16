import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

export const CustomAccountBox = ({name, email, image}: any) => {
  return (
    <View style={styles.backgroundcontainer}>
      <View style={styles.maincontainer}>
        <Image source={image} style={styles.image}></Image>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};
