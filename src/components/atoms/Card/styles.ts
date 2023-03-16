import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderRadius: RFValue(16),
    marginVertical: getHeight(10),
    flexDirection: 'row',
    paddingLeft: getWidth(8),
    backgroundColor: Colors.WHITE,
  },

  image: {
    alignSelf: 'center',
  },
  textcolumn: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: getWidth(16),
    paddingVertical: getHeight(8),
    justifyContent: 'center',
  },
  price: {
    fontFamily: Typography.BOLD_NUNITO,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    lineHeight: Typography.LINE_HEIGHT_24,
    marginBottom: getHeight(10),
  },
  icon: {
    marginTop: getHeight(17.31),
    marginBottom: getHeight(80),
    marginRight: getWidth(16),
    alignSelf: 'flex-start',
    width: getWidth(24),
    height: getHeight(24),
  },
});
export default styles;
