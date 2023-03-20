import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';

import {Colors, Typography} from '../../../styles';
const styles = StyleSheet.create({
  text: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.REGULAR_NUNITO,
    fontWeight: Typography.FONT_WEIGHT_REGULAR500,
    color: Colors.PETROLUIM,
    textAlign: 'center',
  },
});

export default styles;
