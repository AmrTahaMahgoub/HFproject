import {Image, View} from 'react-native';
import {images} from '../../assets';
import styles from './styles';

import {getHeight, getWidth} from '../../config/dimensions';
import { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
const handleRotation = (progress: Animated.SharedValue<number>) => {
  'worklet';

  return `${progress.value * 2 * Math.PI}rad`;
};
const progress = useSharedValue(1);
const scale = useSharedValue(2);
const reanimatedStyle = useAnimatedStyle(() => {
  return {
    opacity: progress.value,
   
    transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
  };
}, []);


export const SplashView = () => {
  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 4, true);
    scale.value = withRepeat(withSpring(1), 4, true);
 
  }, []);
  return (
    <View style={[styles.container]}>
      <Animated.Image
        resizeMode="contain"
        style={[{width: getWidth(256), height: getHeight(256)},reanimatedStyle]}
        source={images.logo}
      />
    </View>
  );
};
