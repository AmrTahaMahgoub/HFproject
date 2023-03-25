import {View, ScrollView, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamList} from '../../navigations/types';
import {ImageHeader} from '../../components/organisms/Header/Header';
import {Strings} from '../../styles';
import {SvgIcon} from '../../assets/svgs';
import {images} from '../../assets';
import styles from './style';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const TurkeyNewsView = ({navigation}: NavigationProps) => {
  return (
    <ScrollView>
      <View>
        <ImageHeader
          onPress={() => {
            navigation.goBack();
          }}
          image={images.turkeynews}></ImageHeader>
      </View>
      <View style={styles.maincontainer}>
        <View style={styles.texticonrow}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>{Strings.TURKEYNEWS}</Text>
          </View>
          <SvgIcon name="SharedYellowIcon"></SvgIcon>
        </View>
        <Text style={styles.longtext}>{Strings.THETITLEOFTHEPOSTHERE}</Text>
        <Text style={styles.date}>{Strings.DATE}</Text>
      </View>
      <View style={styles.newscontenetview}>
        <Text style={styles.newstext}>{Strings.TURKEYNEWSCONTENET}</Text>
        <Text style={styles.newstext}>{Strings.TURKEYNEWSCONTENET}</Text>
        <Text style={styles.newstext}>{Strings.TURKEYNEWSCONTENET}</Text>
      </View>
    </ScrollView>
  );
};
