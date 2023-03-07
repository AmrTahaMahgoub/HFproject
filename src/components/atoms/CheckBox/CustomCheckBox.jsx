import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import styles from './styles';
import {RFValue} from '../../../config/dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../styles';
Colors;
const CustomCheckBox = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setSelection(!isSelected);
      }}>
      <View style={styles.container}>
        <Icon
          name={isSelected ? 'check' : null}
          size={RFValue(14)}
          color={Colors.PETROLUIM}
        />
      </View>
    </Pressable>
  );
};
export default CustomCheckBox;
