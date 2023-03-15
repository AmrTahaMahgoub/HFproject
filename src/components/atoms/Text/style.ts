import {StyleSheet} from 'react-native';

import {Colors, Typography} from '../../../styles';
const styles = StyleSheet.create({
  semibold16: {
    fontFamily: Typography.SEMIBOLD_NUNITO,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.WHITE,
  },
  bold14: {
    fontFamily: Typography.REGULAR_NUNITO,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.DARK_GREY,
  },
  regular14: {
    fontFamily: Typography.REGULAR_NUNITO,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.LIGHT_GRAY,
  },
  semibold14: {
    fontFamily: Typography.SEMIBOLD_NUNITO,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.DARK_GREY,
  },

  bold19: {
    fontFamily: Typography.SEMIBOLD_NUNITO,
    fontSize: Typography.FONT_SIZE_19,
    color: Colors.DARK_GREY,
  },
  bold18: {
    fontFamily: Typography.BOLD_NUNITO,
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.WHITE,
  },
});

export default styles;
