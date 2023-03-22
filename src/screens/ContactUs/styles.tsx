import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../config/dimensions';
import {Colors, Typography} from '../../styles';

const styles = StyleSheet.create({
  firstcontainer: {
    marginTop: getHeight(32),
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: Colors.WHITE,
    height: getHeight(127),
    width: getWidth(343),
    paddingHorizontal: getWidth(20),
    paddingVertical: getHeight(20),
  },
  textcontainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  getintouch:{
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    lineHeight: Typography.LINE_HEIGHT_20,
    color: Colors.PETROLUIM,
  },
  phonenumber:{
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,

    lineHeight: Typography.LINE_HEIGHT_16,
    color: Colors.PETROLUIM,
  },
  image:{width: getWidth(101), height: getHeight(80)},
  centeredtext:{
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,

    lineHeight: Typography.LINE_HEIGHT_20,
    color: Colors.DARKY_LIGHT_GRAY,
    textAlign: 'center',
    marginVertical: getHeight(28),
  },
  largestcontainer:{
    alignSelf: 'center',
    height: getHeight(444),
    width: getWidth(343),
    backgroundColor: Colors.WHITE,
    paddingHorizontal: getWidth(16),
    paddingVertical: getHeight(16),
  },title:{
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,
    lineHeight: Typography.LINE_HEIGHT_20,
    color: Colors.DARK_GREY,
  },
  textinput:{width: getWidth(311), height: getHeight(44)},
  messagetextinput:{width: getWidth(311), height: getHeight(90)},
  termsconditionrow:{marginTop: getHeight(24), marginHorizontal: getWidth(16)},
  send:{
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    lineHeight: Typography.LINE_HEIGHT_20,
    color: Colors.DARK_GREY,
    marginRight: getWidth(5),
}
});
export default styles;
