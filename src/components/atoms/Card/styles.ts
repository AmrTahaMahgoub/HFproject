import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: RFValue(16),
    marginVertical: getHeight(10),
    width: getWidth(343),
    height: getHeight(120),
    flexDirection: 'row',
    paddingVertical: getHeight(8),
    paddingLeft: getWidth(8),
    paddingRight: getWidth(16),
    backgroundColor: Colors.WHITE
  },
  image:{width: RFValue(104, 812), height: RFValue(104, 812)},
  textcolumn:{
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: getWidth(16),
    paddingVertical: getHeight(12),
    justifyContent: 'center',
    height: '100%',
  },
  price:{
    fontFamily: Typography.BOLD_NUNITO,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    lineHeight: Typography.LINE_HEIGHT_22,
    marginBottom: getHeight(8),
    
  },
  icon:{
    marginTop: getHeight(16),
    marginBottom: getHeight(80),
    alignSelf: 'flex-start',
    width: getWidth(24),
    height: getHeight(24),
  }

});
export default styles;
