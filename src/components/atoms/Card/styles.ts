import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: RFValue(16),
    marginVertical: getHeight(3),
    paddingHorizontal: getWidth(8),
    backgroundColor: Colors.WHITE,
    width: getWidth(343),
    height: getHeight(120),
  },

  image: {
    width: getWidth(104),
    height: getHeight(104),
    borderRadius: RFValue(16),
    // alignSelf: 'center',
  },
  contenent: {
    flex: 1,
    paddingHorizontal: getWidth(9),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  price: {
    fontFamily: Typography.BOLD_NUNITO,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    lineHeight: Typography.LINE_HEIGHT_24,
  },
  icon: {
    marginTop: getHeight(5.31),
  },
});
export default styles;
