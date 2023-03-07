import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: RFValue(8),
    backgroundColor: Colors.OFF_WHITE,
    height: getHeight(48),
    width: getWidth(343),
    marginTop: getHeight(12),
    marginBottom: getHeight(16),
  },

  inputStyle: {
    height: '100%',
    width: '70%',
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.BOLD_NUNITO,
    alignSelf: 'center',
    alignContent: 'center',
  },

  passwordButton: {
    marginLeft: getWidth(33),
  },

  lefticon: {
    marginLeft: getWidth(16.83),
    marginVertical: getHeight(16),
    marginTop: getHeight(17.83),
    marginRight: getWidth(7),
  },
});
export default styles;
