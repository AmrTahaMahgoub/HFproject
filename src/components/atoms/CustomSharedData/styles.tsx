import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: getHeight(56),
    width: getWidth(343),
    marginHorizontal: getWidth(16),
    backgroundColor: Colors.WHITE,
    borderRadius: RFValue(4),
    marginBottom: getHeight(15),
  },
  yellowcontainer: {
    width: getHeight(4),
    height: getHeight(56),
    backgroundColor: Colors.YELLOW,
    borderTopLeftRadius: RFValue(36),
    borderBottomLeftRadius: RFValue(25),
  },
  yellowicon: {marginLeft: getWidth(20), marginRight: getWidth(16)},
  title: {
    flex: 1,
    fontFamily: Typography.BOLD_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    lineHeight: Typography.FONT_SIZE_19,
    color: Colors.BLACK,
  },
});
export default styles;
