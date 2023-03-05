import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  innercontainer: {
    alignItems: 'baseline',
    borderRadius: RFValue(8),
    backgroundColor: Colors.OFF_WHITE,
    height: getHeight(48),
    width: getWidth(343),
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: getHeight(12),
    marginBottom: getHeight(16),
    // alignContent:"center"
  },

  inputStyle: {
    // marginRight: getWidth(125),
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.BOLD_NUNITO,
  },

  passwordButton: {
    marginRight: getWidth(17.99),
  },

  lefticon: {
    marginStart: getWidth(16.83),
  },
});
export default styles;
