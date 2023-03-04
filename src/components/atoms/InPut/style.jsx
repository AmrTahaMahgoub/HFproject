import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    borderRadius: RFValue(8),
    backgroundColor: 'grey',
    height: getHeight(48),
    width: getWidth(343),
  },
  inputStyle: {
    marginRight: getWidth(131),
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.BOLD_NUNITO,
  },

  passwordButton: {
    marginRight: getWidth(16),
    marginLeft: getWidth(21),
  },

  lefticon: {
    marginStart: getWidth(16.83),
    // paddingStart:getHeight(17.83),
    // paddingEnd:getHeight(17.83)
  },
});
export default styles;
