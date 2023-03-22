import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  text: {
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.SEMIBOLD_NUNITO,
    color: Colors.PETROLUIM,
    lineHeight: Typography.LINE_HEIGHT_16,
    marginVertical: getHeight(8),
    marginHorizontal: getWidth(16),
  },
});
export default styles;
