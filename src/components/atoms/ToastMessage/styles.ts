import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  box: {
    height: getHeight(59),
    width: getWidth(343),
    backgroundColor: Colors.GREEN,
    marginTop: getHeight(702),
    marginLeft: getWidth(16),
    marginRight: getWidth(16),
    marginBottom: getHeight(51),
    borderRadius: RFValue(16),
    paddingLeft: getWidth(16),
    paddingRight: getWidth(16),
  },

  title: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.LIGHT_NUNITO,
    marginRight: getWidth(16),
    marginLeft: getWidth(16),
    color: Colors.WHITE,
  },
});

export default styles;
