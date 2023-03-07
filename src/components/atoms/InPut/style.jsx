import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: RFValue(8),
    backgroundColor: Colors.OFF_WHITE,
    height: getHeight(48),
    width: getWidth(343),
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: getHeight(12),
    marginBottom: getHeight(16),
  },

  inputStyle: {
    height: '100%',
    width: '70%',

    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.BOLD_NUNITO,
   
  },

  passwordButton: {
    marginRight: getWidth(16.83),
    marginTop: getHeight(22),
    marginBottom: getHeight(17.83),
    marginLeft: getWidth(30),
  },

  lefticon: {
    marginLeft: getWidth(16.83),
    marginTop: getHeight(22),
    marginBottom: getHeight(17.83),
  },
});
export default styles;
