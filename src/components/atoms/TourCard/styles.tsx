import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';

const styles = StyleSheet.create({
    container:{
        borderRadius: RFValue(8),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: getWidth(8),
        paddingTop: getHeight(8),
        paddingBottom: getHeight(12),
        backgroundColor: Colors.WHITE,
        marginBottom: getHeight(10),
        marginHorizontal: getWidth(5.5),
      },
      image:{
        marginBottom: getHeight(10),
      },
      date:{
        marginBottom: getHeight(6),
        fontSize: Typography.FONT_SIZE_12,
        fontFamily: Typography.REGULAR_MULISH,
        fontWeight: Typography.FONT_WEIGHT_REGULAR500,
        color: Colors.LIGHT_GRAY,
        lineHeight: Typography.LINE_HEIGHT_15,
        alignSelf: 'flex-start',
      },
      text:{
        fontSize: Typography.FONT_SIZE_12,
        fontFamily: Typography.REGULAR_MANROPE,
        fontWeight: Typography.FONT_WEIGHT_REGULAR500,
        color: Colors.BLACK,
        alignSelf: 'flex-start',
      },
      readmore:{
        fontSize: Typography.FONT_SIZE_10,
        fontFamily: Typography.BOLD_MANROPE,
        fontWeight: Typography.FONT_WEIGHT_REGULAR,
        color: Colors.LIGHT_GRAY,
        alignSelf: 'flex-start',
      }


});

export default styles;
