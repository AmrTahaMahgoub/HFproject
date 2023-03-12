import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';
import {margin} from '../../../styles/mixins';

const styles = StyleSheet.create({
  headertitle: {
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },
  simpleHeaderSearchbar:{
    height:getHeight(94),
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
    backgroundColor: Colors.YELLOW,
    borderRadius: RFValue(12),
  },
  listicon: {
    justifyContent: 'center',
    margin: RFValue(16),
  },
});

export default styles;
