import React, {useState} from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {SvgIcon} from '../../../assets/svgs';
import {getHeight, RFValue} from '../../../config/dimensions';
import {ImageTextRow} from '../ImageTextRow';
import {ViewRow} from '../ViewRow';
import styles from './styles';
export const Card = ({biano, area, bed, image, price}: any) => {
  let [isFavorite, setFavorite] = useState(false);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.contenent}>
        <View
          style={{
           
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
           
          }}>
          <Text style={styles.price}>
            {price}
       
          </Text>
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
    </View>
  );
};
