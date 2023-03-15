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
    marginBottom: getHeight(19),
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
    borderTopStartRadius: RFValue(32),
    borderTopEndRadius: RFValue(32),
    backgroundColor: Colors.WHITE,
    height: getHeight(39),
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
});

export default styles;
