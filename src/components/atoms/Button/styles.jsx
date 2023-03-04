import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from '../../../config/dimensions';
import {Colors} from '../../../styles';
const styles = StyleSheet.create({
  StandardButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidth(343),
    height: getHeight(56),
    backgroundColor: Colors.YELLOW,
    borderRadius: getHeight(12),
    flexDirection: 'row',
  },
});
export default styles;
