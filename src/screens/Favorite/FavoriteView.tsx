import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList, Text, View} from 'react-native';
import {Card} from '../../components/atoms';
import {MainHeader} from '../../components/organisms/Header/Header';
import {getHeight} from '../../config/dimensions';
import {BottomTabNavigatorTypes} from '../../navigations/types';
import {DATA} from '../../redux/Api/GetData';
import styles from './styles';

type ScreenNavigationProp = StackNavigationProp<BottomTabNavigatorTypes>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const FavoriteScreenView = ({navigation}: NavigationProps) => {
  return (
    <View>
      <MainHeader title={'Favorites'} IsIconShown={false}></MainHeader>
      <View style={{paddingHorizontal: getHeight(16)}}>
        <Text style={styles.properties}>Properties</Text>

        <View>
          <FlatList
            style={{height: '19%'}}
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({item}) => (
              <Card
                biano={item.banio}
                area={item.area}
                bed={item.bed}
                image={item.image}
                price={item.price}
                id={item.id}></Card>
            )}></FlatList>
        </View>
        <Text style={styles.Blogposts}>Blog posts</Text>
        <View
  
        >
          <FlatList
         style={{height: '100%',}}
         
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({item}) => (
              <Card
                biano={item.banio}
                area={item.area}
                bed={item.bed}
                image={item.image}
                price={item.price}
                id={item.id}></Card>
            )}></FlatList>
        </View>
      </View>
    </View>
  );
};
