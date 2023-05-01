import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  headertitle: {
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },
  mainheadertitle: {
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.REGULAR_NUNITO,
    lineHeight: Typography.LINE_HEIGHT_20,
    color: Colors.WHITE,
  },
  mainheader: {
    backgroundColor: Colors.PETROLUIM,
    height: getHeight(62),
    flexDirection: 'row',
    paddingHorizontal: getWidth(20),
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: RFValue(20),
    borderBottomRightRadius: RFValue(20),
  },
  simpleHeaderSearchbar: {
    height: getHeight(94),
    flexDirection: 'row',
    paddingHorizontal: getWidth(20),
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  searchbar: {
    flexDirection: 'row',
    paddingHorizontal: getWidth(20),
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  lefticonsearchbar: {
    marginLeft: getWidth(16.83),
    marginVertical: getHeight(16),
    marginTop: getHeight(17.83),
    marginRight: getWidth(7),
  },
  inputStyle: {
    flex: 1,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.BOLD_NUNITO,
    alignSelf: 'center',
    alignContent: 'center',
  },

  searchinputtext: {
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: RFValue(8),
    backgroundColor: Colors.OFF_WHITE,
    height: getHeight(48),
    width: getWidth(285),
  },
  listiconcontainer: {
    width: getHeight(48),
    height: getHeight(48),
    paddingHorizontal: getWidth(16),
    paddingVertical: getHeight(15),
    backgroundColor: Colors.YELLOW,
    borderRadius: RFValue(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  blankcontainer: {
    borderTopStartRadius: RFValue(70),
    borderTopEndRadius: RFValue(70),
    backgroundColor: Colors.WHITE,
    height: getHeight(25),
    width: '100%',
  },
  complexheader: {
    flexDirection: 'column',
    backgroundColor: Colors.PETROLUIM,
    height: getHeight(112),
    paddingTop: getHeight(10),
    borderBottomLeftRadius: RFValue(16),
    borderBottomRightRadius: RFValue(16),
  },
  searchinputview: {
    justifyContent: 'space-between',
    marginHorizontal: getWidth(16),
    marginVertical: getHeight(14),
  },
  maintitle: {
    marginTop: getHeight(20),
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.SEMIBOLD_NUNITO,
    color: Colors.PETROLUIM,
    textAlign: 'center',
    lineHeight: Typography.LINE_HEIGHT_20,
  },
  divider: {
    width: getWidth(48),
    height: getHeight(4),
    backgroundColor: Colors.LIGHT_GRAY,
    alignSelf: 'center',
    borderRadius: RFValue(17),
  },
  maincontainer: {
    borderTopStartRadius: RFValue(20),
    borderTopEndRadius: RFValue(20),
    paddingTop: getHeight(20),
    paddingHorizontal: getWidth(24),
    backgroundColor: Colors.WHITE,
  },
  textcontainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: getHeight(24),
    width: getWidth(327),
    height: getHeight(274),
    marginBottom: getHeight(40),
  },
  text: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_REGULAR500,
    color: Colors.PETROLUIM,
    textAlign: 'center',
  },
  button: {marginTop: 0, width: getWidth(327)},
});

export default styles;
