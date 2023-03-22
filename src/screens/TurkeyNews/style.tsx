import {StyleSheet} from 'react-native';
import {getWidth, getHeight} from '../../config/dimensions';
import {Colors, Typography} from '../../styles';

const styles = StyleSheet.create({
  Specificationstext: {
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.BOLD_NUNITO,
    lineHeight: Typography.LINE_HEIGHT_16,
    color: Colors.BLACK,
  },
  projectcontainer: {
    width: '100%',
    height: getHeight(115),
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(24),
    paddingVertical: getHeight(16),
  },
  projecttexticoncontainer: {
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  projecttext: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_REGULAR500,
    lineHeight: Typography.LINE_HEIGHT_20,
    color: Colors.PETROLUIM,
  },
  price: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    lineHeight: Typography.LINE_HEIGHT_24,
    color: Colors.PETROLUIM,
  },
  navigationicontext: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,
    lineHeight: Typography.LINE_HEIGHT_20,
    color: Colors.LIGHT_GRAY,
  },
  specificationcontainer: {
    flexDirection: 'row',
    height: getHeight(100),
    width: getWidth(327),
  },
  firstspecicloumndata: {
    flexDirection: 'column',
    marginRight: getWidth(100),
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  secontspeciccolumndata: {
    flexDirection: 'column',
    marginRight: getWidth(100),
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  descriptiontext: {
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    lineHeight: Typography.LINE_HEIGHT_16,
    color: Colors.SEMI_BLACK,
  },
});
export default styles;
