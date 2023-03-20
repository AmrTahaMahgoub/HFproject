import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: getWidth(8),
    paddingVertical: getHeight(8),
    backgroundColor: Colors.WHITE,
    marginBottom: getHeight(10),
    marginHorizontal: getWidth(5.5),
  },
  image: {
    height: getHeight(128),
    width: getWidth(149.8),
    borderRadius: RFValue(8),

    marginBottom: getHeight(16),
  },
  date: {
    marginBottom: getHeight(6),
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.REGULAR_MULISH,
    fontWeight: Typography.FONT_WEIGHT_REGULAR500,
    color: Colors.LIGHT_GRAY,
    lineHeight: Typography.LINE_HEIGHT_15,
  },
  text: {
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.REGULAR_MANROPE,
    fontWeight: Typography.FONT_WEIGHT_REGULAR500,
    color: Colors.BLACK,
  },
  readmore: {
    fontSize: Typography.FONT_SIZE_10,
    fontFamily: Typography.BOLD_MANROPE,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    color: Colors.LIGHT_GRAY,
  },
});

export default styles;
