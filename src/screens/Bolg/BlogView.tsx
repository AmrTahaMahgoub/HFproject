import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList, View} from 'react-native';
import {TourCard, TitlesView} from '../../components/atoms';
import {MainHeader} from '../../components/organisms/Header/Header';
import {getWidth} from '../../config/dimensions';
import {StackNavigatorParamList} from '../../navigations/types';
import {TITLES, TOURTITLE} from '../../redux/Api/GetData';
import styles from './styles';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const BlogView = ({navigation}: NavigationProps, state: any) => {
  return (
    <View>
      <MainHeader title={'Blog posts'} IsIconShown={false}></MainHeader>
      <View>
        <View style={{paddingLeft: getWidth(16)}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={TITLES}
            renderItem={({item}) => (
              <TitlesView
                onpressed={() => {
                  navigation.navigate('TurkeyNewsView');
                }}
                title={item.key}></TitlesView>
            )}></FlatList>
        </View>
        <View style={styles.container}>
          <FlatList
            style={{height: '84%'}}
            key={state.horizontal ? 'h' : 'v'}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={TOURTITLE}
            renderItem={({item}) => (
              <TourCard
                image={item.image}
                text1={item.text1}
                text2={item.text2}
                readmore={item.readmore}
                date={item.date}></TourCard>
            )}></FlatList>
        </View>
      </View>
    </View>
  );
};
