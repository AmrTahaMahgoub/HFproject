import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    height: getHeight(16),
    width: getWidth(16),
    backgroundColor: Colors.OFF_WHITE,
    borderRadius: RFValue(4),
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: 1,
    marginRight: getWidth(16),
    
  },
});
export default styles;
