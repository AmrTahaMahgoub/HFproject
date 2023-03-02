import {Image, View} from 'react-native';
import {images} from '../../assets';
import styles from './styles';

import {getHeight, getWidth} from '../../config/dimensions';

export const SplashView = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{width: getWidth(256), height: getHeight(256)}}
        source={images.logo}
      />
    </View>
  );
};
