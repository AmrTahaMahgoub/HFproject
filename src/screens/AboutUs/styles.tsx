import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from '../../config/dimensions';
import {Colors, Typography} from '../../styles';

const styles = StyleSheet.create({
  image: {
    height: getHeight(100),
    width: getWidth(100),
    alignSelf: 'center',
    marginTop: getHeight(12),
    marginBottom: getHeight(33),
  },
  textcontainer: {paddingLeft: getWidth(30), paddingRight: getWidth(19)},
  projecttext: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    lineHeight: Typography.LINE_HEIGHT_20,
    color: Colors.PETROLUIM,
  },
  text: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,

    lineHeight: Typography.LINE_HEIGHT_16,
    color: Colors.DARK_GREY,
    marginBottom: getHeight(9),
  },
});
export default styles;
