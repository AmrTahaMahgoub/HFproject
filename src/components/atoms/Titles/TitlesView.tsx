import {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors} from '../../../styles';
import styles from './styles';

type TitlesViewType = {title: any; onpressed: any};
export const TitlesView = ({title, onpressed}: TitlesViewType) => {
  let [IsTouched, setTouched] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setTouched(!IsTouched);
      }}>
      <View
        style={{
          borderRadius: RFValue(50),
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: IsTouched ? Colors.YELLOW : Colors.DARK_OFF_WHITE,
          marginHorizontal: getWidth(8),
          marginVertical: getHeight(21),
        }}>
        <Pressable onPress={onpressed}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
