import {getActionFromState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Image, Text} from 'react-native';
import {images} from '../../assets';

import {MainHeader} from '../../components/organisms/Header/Header';
import {getHeight, getWidth} from '../../config/dimensions';
import {StackNavigatorParamList} from '../../navigations/types';
import {Colors, Strings, Typography} from '../../styles';
import styles from './styles';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation?: ScreenNavigationProp};

export const AboutUsView = ({navigation}: NavigationProps) => {
  return (
    <>
      <View>
        <MainHeader
          onPressed={() => {
            navigation?.goBack();
          }}
          IsIconShown={true}
          title={'About us'}></MainHeader>
      </View>
      <Image
        resizeMode="cover"
        source={images.logo}
        style={styles.image}></Image>
      <View style={styles.textcontainer}>
        <Text style={styles.projecttext}>{Strings.ABOUTUSHF}</Text>
        <Text style={styles.text}>{Strings.ABOUTUSHFTITLEONE}</Text>
        <Text style={styles.text}>{Strings.ABOUTUSHFTITLEONE}</Text>
        <Text style={styles.text}>{Strings.ABOUTUSHFTITLETWO}</Text>
      </View>
    </>
  );
};
