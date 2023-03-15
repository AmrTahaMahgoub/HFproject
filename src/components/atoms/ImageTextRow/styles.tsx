import {StyleSheet} from 'react-native';
import {getWidth} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';
const styles = StyleSheet.create({
 text:{
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.REGULAR_NUNITO,
    color: Colors.PETROLUIM,
    lineHeight: Typography.LINE_HEIGHT_16,
    marginLeft:getWidth(4)
   
  }
});
export default styles;
