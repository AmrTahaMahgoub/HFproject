import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../config/dimensions';
import {Colors, Typography} from '../../styles';

const styles = StyleSheet.create({
  bottonnavigationbar: {
    flexDirection: 'row',
     alignItems: 'center',
     justifyContent:"space-between",
    backgroundColor: Colors.WHITE,
    width: getWidth(375),
    height: getHeight(68),
    paddingHorizontal:getWidth(8),
    shadowOffset: {width: 0, height: -8},
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 10,
  },
  navigationbartitle: {
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.REGULAR_MANROPE,
    lineHeight: Typography.LINE_HEIGHT_16,
    color: Colors.PETROLUIM,
marginLeft:RFValue(5),
  },
});
export default styles;
