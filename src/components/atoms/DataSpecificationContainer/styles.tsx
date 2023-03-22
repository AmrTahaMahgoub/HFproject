import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'column',
    width: '100%',
    height: getHeight(183),
    marginTop: getHeight(12),
    paddingHorizontal: getWidth(24),
    paddingVertical: getHeight(16),
  },
  title: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    lineHeight: Typography.LINE_HEIGHT_20,
    color: Colors.PETROLUIM,
  },
  divider: {
    width: getWidth(327),
    height: getHeight(1),
    backgroundColor: Colors.OFF_WHITE,
    marginVertical: getHeight(16),
  },
});
export default styles;
