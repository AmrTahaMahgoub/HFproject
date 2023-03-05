import React, {useState} from 'react';
import { View, Pressable} from 'react-native';
import styles from './styles';
import { RFValue} from '../../../config/dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../styles';
Colors;
const CustomCheckBox = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setSelection(!isSelected);
        }}>
        <Icon
          name={isSelected ? 'check' : null}
          size={RFValue(16)}
          color={Colors.PETROLUIM}
        />
      </Pressable>
    </View>
  );
};
export default CustomCheckBox;


