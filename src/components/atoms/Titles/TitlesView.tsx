import {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';
import styles from './styles';

export const TitlesView = ({title}: any) => {
  let [IsTouched, setTouched] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        setTouched(!IsTouched);
      }}>
      <View
        style={{
          height: getHeight(32),
          borderRadius: RFValue(50),
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: IsTouched ? Colors.YELLOW : Colors.DARK_OFF_WHITE,
          paddingVertical: getHeight(8),
          paddingHorizontal: getWidth(16),
          marginHorizontal: getWidth(8),
          marginVertical: getHeight(21),
        }}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
