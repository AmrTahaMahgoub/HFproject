import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {IconsName} from '../../../@types/iconTypes';
import {images} from '../../../assets';
import {SvgIcon} from '../../../assets/svgs';
import {getHeight, getWidth, RFValue} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';
import {ImageTextRow} from '../ImageTextRow';
import {ViewRow} from '../ViewRow';

export const TourCard = ({date, text1, text2, readmore, image}: any) => {
  return (
    <View
      style={{
        height: getHeight(241),
        width:getWidth(166),
       
        borderRadius: RFValue(8),
    
        justifyContent: 'center',
        alignItems: 'flex-start',
        
        paddingVertical: getHeight(8),
        paddingHorizontal: getWidth(8),
        backgroundColor: Colors.WHITE,
       //backgroundColor:"grey",
        marginBottom: getHeight(11),
      }}>
      <Image
        style={{
          marginBottom: getHeight(10),
          // width: RFValue(160, 812),
          // height: RFValue(128, 812),
          borderRadius: RFValue(8),
        }}
        source={image}></Image>
      <Text
        style={{
          marginBottom: getHeight(6),
          fontSize: Typography.FONT_SIZE_12,
          fontFamily: Typography.REGULAR_MULISH,
          fontWeight:Typography.FONT_WEIGHT_REGULAR500,
          color: Colors.LIGHT_GRAY,
          lineHeight: Typography.LINE_HEIGHT_15,
          
          alignSelf:"flex-start",
          
        }}>
        {date}
      </Text>
      <Text
        style={{
          fontSize: Typography.FONT_SIZE_12,
          fontFamily: Typography.REGULAR_MANROPE,
          fontWeight: Typography.FONT_WEIGHT_REGULAR500,
          color: Colors.BLACK,
          alignSelf:"flex-start",
       
        }}>
        {text1}
      </Text>
      <Text
        style={{
         
          fontSize: Typography.FONT_SIZE_12,
          fontFamily: Typography.REGULAR_MANROPE,
          fontWeight: Typography.FONT_WEIGHT_REGULAR500,
          color: Colors.BLACK,
          marginBottom: getHeight(8),
          alignSelf:"flex-start",
        }}>
        {text2}
      </Text>
      <Text
        style={{
          fontSize: Typography.FONT_SIZE_10,
          fontFamily: Typography.BOLD_MANROPE,
          fontWeight: Typography.FONT_WEIGHT_REGULAR,
          color: Colors.LIGHT_GRAY,
          alignSelf:"flex-start",
      
        }}>
        {readmore}
      </Text>
    </View>
  );
};
