import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.BOLD_NUNITO,
   
    

    textAlign: 'left',
    paddingHorizontal: getWidth(16),
    paddingVertical: getWidth(14),
  },
  inputError: {
    color: Colors.RED,
  },
  labelView: {
    height: getHeight(41.5),
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(16),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  passwordButton: {
    width: getWidth(16.4),
    height: getHeight(14),
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: getWidth(15),
  },
  icon: {
    width: getWidth(25.63),
    height: getHeight(15.38),
  },
});
export default styles;
