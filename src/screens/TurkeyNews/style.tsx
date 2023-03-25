import {StyleSheet} from 'react-native';
import {getWidth, getHeight, RFValue} from '../../config/dimensions';
import {Colors, Typography} from '../../styles';

const styles = StyleSheet.create({
  maincontainer:{
    width: getWidth(375),
    height: getHeight(117),
    paddingVertical: getHeight(20),
    paddingHorizontal: getWidth(16),
    backgroundColor: Colors.WHITE,
    marginBottom: getHeight(12),
  },
  texticonrow:{flexDirection: 'row', justifyContent: 'space-between'},
  textcontainer:{
    backgroundColor: Colors.YELLOW,
    borderRadius: RFValue(4),
    justifyContent: 'center',
    paddingHorizontal: getWidth(8),
    height: getHeight(24),
    width: getWidth(80),
  },
  text:{
    fontSize: Typography.FONT_SIZE_11,
    fontFamily: Typography.LIGHT_MANROPE,
    lineHeight: Typography.LINE_HEIGHT_15,
    textAlign: 'center',
  },
  longtext:{
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.BOLD_NUNITO,
    lineHeight: Typography.LINE_HEIGHT_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.PETROLUIM,
  },
  date:{
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_MULISH,
    lineHeight: Typography.LINE_HEIGHT_16,
    color: Colors.DARKY_LIGHT_GRAY,
  },
  newscontenetview:{
    backgroundColor: Colors.WHITE,
    paddingHorizontal: getWidth(16),
    paddingVertical: getHeight(16),
    height: getHeight(406),
    width: getWidth(375),
  },
  newstext:{
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.MEDIUM_NUNITO,
    lineHeight: Typography.LINE_HEIGHT_16,
    color: Colors.DARKY_LIGHT_GRAY,
    marginBottom: getHeight(16),
  },
  
  
});
export default styles;
