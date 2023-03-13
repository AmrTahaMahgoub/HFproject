import { Image, ImageSourcePropType, Text, View } from "react-native"
import { IconsName } from "../../../@types/iconTypes"
import { images } from "../../../assets"
import { SvgIcon } from "../../../assets/svgs"
import { getHeight, getWidth, RFValue } from "../../../config/dimensions"
import { Colors, Typography } from "../../../styles"
import { ImageTextRow } from "../ImageTextRow"
import { ViewRow } from "../ViewRow"

export const Card=({biano,area,bed,image,price}:any)=>{
    return(
        <View
        style={{
          width: getWidth(343),
          height: getHeight(120),
          borderRadius: RFValue(16),
          marginVertical:getHeight(10),
          flexDirection: 'column',
          backgroundColor:Colors.WHITE
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: getHeight(8),
            paddingLeft: getWidth(8),
          }}>
          <Image source={image}></Image>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginLeft: getWidth(12),
              marginVertical: getHeight(12),
            }}>
            <ViewRow
              style={{
                width: '66%',
                justifyContent: 'space-between',
              
                
              }}>
              <Text
                style={{
                  fontFamily: Typography.BOLD_NUNITO,
                  fontSize: Typography.FONT_SIZE_16,
                  fontWeight: Typography.FONT_WEIGHT_BOLD,
                  
                }}>
                {price}
              </Text>
              <SvgIcon name="FavoriteIcon" ></SvgIcon>
            </ViewRow>
            <ImageTextRow name="BedIcon" title={bed}></ImageTextRow>
            <ImageTextRow name="AreaIcon" title={area}></ImageTextRow>
            <ImageTextRow name="BanioIcon" title={biano}></ImageTextRow>
          </View>
        </View>
      </View>
    )
}