import {Image, Text, View} from 'react-native';
import styles from './styles';
export const TourCard = ({date, text1, text2, readmore, image}: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>

      <Text style={styles.date}>{date}</Text>
      <Text style={styles.text}>
        {text1}
        {'\n'}
        {text2}
      </Text>

      <Text style={styles.readmore}>{readmore}</Text>
    </View>
  );
};
