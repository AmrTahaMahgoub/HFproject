import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  backgroundcontainer: {
    width: getWidth(343),
    height: getHeight(171),
    backgroundColor: Colors.OFF_WHITE,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: getWidth(16),
    marginTop: getHeight(19),
  },
  maincontainer: {
    width: getWidth(343),
    height: getHeight(137),
    backgroundColor: Colors.WHITE,
    borderRadius: RFValue(10),
  },
  image: {
    width: RFValue(90),
    height: RFValue(90),

    position: 'absolute',
    alignSelf: 'center',
    bottom: getHeight(81),
  },
  name: {
    marginTop: getHeight(67),
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.BOLD_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    lineHeight: Typography.LINE_HEIGHT_22,
    color: Colors.PETROLUIM,
    textAlign: 'center',
  },

  email: {
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    lineHeight: Typography.LINE_HEIGHT_16,
    textAlign: 'center',
    color: Colors.PETROLUIM,
  },
});
export default styles;
