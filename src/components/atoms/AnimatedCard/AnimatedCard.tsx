import React, { useRef, useState } from 'react';
import { Image, Text, View, Pressable, Animated, StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
import { SvgIcon } from '../../../assets/svgs';
import { getHeight, getWidth, RFValue } from '../../../config/dimensions';
import { ImageTextRow } from '../ImageTextRow';
import { ViewRow } from '../ViewRow';
import styles from './styles';
import { Colors } from '../../../styles';
import { transform } from '@babel/core';
type CardType = {
  biano: any, area: any, bed: any, image?: any, price: any, onpressed?: () => void, style?: any, id :any,
}
export const AnimatedCard = ({ biano, area, bed, image, price, onpressed, style }: CardType) => {
  let [isFavorite, setFavorite] = useState(false);

  return (
    <Pressable onPress={onpressed}>
      <Animated.View style={[{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: RFValue(16),
        marginVertical: getHeight(3),
        paddingHorizontal: getWidth(8),
        backgroundColor: Colors.WHITE,
        width: getWidth(343),
        height: getHeight(120),
        elevation: 2,
    
      },style]} >
        <Image style={styles.image} source={image}></Image>
        <View style={styles.contenent}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.price}>{price}</Text>
            <Pressable
              onPress={() => {
                setFavorite(!isFavorite);
              }}>
              <SvgIcon
                name={isFavorite ? 'UnFavoriteIcon' : 'FavoriteIcon'}
                style={styles.icon}></SvgIcon>
            </Pressable>
          </View>
          <ImageTextRow name="BedIcon" title={bed}></ImageTextRow>
          <ImageTextRow name="AreaIcon" title={area}></ImageTextRow>
          <ImageTextRow name="BanioIcon" title={biano}></ImageTextRow>
        </View>
      </Animated.View>
    </Pressable>
  );
};
