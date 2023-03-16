import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList, SafeAreaView, View} from 'react-native';
import {Card} from '../../components/atoms';
import {ComplexHeader} from '../../components/organisms/Header/Header';
import {getWidth} from '../../config/dimensions';
import {BottomTabNavigatorTypes} from '../../navigations/types';
import {DATA} from '../../redux/Api/GetData';
import {Colors} from '../../styles';

type ScreenNavigationProp = StackNavigationProp<BottomTabNavigatorTypes>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const HomeScreenView = ({navigation}: NavigationProps) => {
  return (
    <View>
      <ComplexHeader title={'Search'} onPressed={() => {}}></ComplexHeader>
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: getWidth(16),
            backgroundColor: Colors.OFF_WHITE,
          }}>
          <View>
            <FlatList
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
      </SafeAreaView>
    </View>
  );
};
