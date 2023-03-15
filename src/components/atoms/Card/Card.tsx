import React, {useState} from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {SvgIcon} from '../../../assets/svgs';
import {ImageTextRow} from '../ImageTextRow';
import styles from './styles';
export const Card = ({biano, area, bed, image, price}: any) => {
  let [isFavorite, setFavorite] = useState(false);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.textcolumn}>
        <Text style={styles.price}>{price}</Text>
        <ImageTextRow name="BedIcon" title={bed}></ImageTextRow>
        <ImageTextRow name="AreaIcon" title={area}></ImageTextRow>
        <ImageTextRow name="BanioIcon" title={biano}></ImageTextRow>
      </View>
      <Pressable
        onPress={() => {
          setFavorite(!isFavorite);
        }}>
        <SvgIcon
          name={isFavorite ? 'FavoriteIcon' : 'UnFavoriteIcon'}
          style={styles.icon}></SvgIcon>
      </Pressable>
    </View>
  );
};
