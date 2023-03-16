import {StyleSheet} from 'react-native';
import {getHeight} from '../../config/dimensions';
import {Typography} from '../../styles';

const styles = StyleSheet.create({
  properties: {
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: Typography.FONT_SIZE_14,
    lineHeight: Typography.LINE_HEIGHT_20,
    marginTop: getHeight(21),
  },
  Blogposts: {
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: Typography.FONT_SIZE_14,
    lineHeight: Typography.LINE_HEIGHT_20,
    marginTop: getHeight(16),
  },
});
export default styles;
