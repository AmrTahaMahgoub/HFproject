import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import styles from './styles';
import {RFValue} from '../../../config/dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../styles';

export const CustomCheckBox = () => {
  let [isSelected, setSelection] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setSelection(!isSelected);
      }}>
      <View style={styles.container}>
        <Icon
          name={isSelected ? 'close' : 'check'}
          size={RFValue(13)}
          color={Colors.PETROLUIM}
        />
      </View>
    </Pressable>
  );
};
