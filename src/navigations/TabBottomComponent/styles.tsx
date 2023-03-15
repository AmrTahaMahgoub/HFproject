import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../config/dimensions';
import {Colors, Typography} from '../../styles';

const styles = StyleSheet.create({
bottonnavigationbar:{
    width: getWidth(375),
    height: getHeight(68),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: getWidth(16),
    paddingVertical: getHeight(12),
    borderTopLeftRadius: RFValue(12),
    borderTopRightRadius: RFValue(12),
    shadowOffset: {width: 0, height: -8},
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 10,
  },
  navigationbartitle:{
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.REGULAR_MANROPE,
    fontWeight: Typography.FONT_WEIGHT_REGULAR500,
    lineHeight: Typography.LINE_HEIGHT_20,
    color: Colors.PETROLUIM,
    marginLeft: getHeight(2),
  },
});
export default styles;
