import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList, View} from 'react-native';
import {Card} from '../../components/atoms';
import {ComplexHeader} from '../../components/organisms/Header/Header';
import {getHeight, getWidth} from '../../config/dimensions';
import {StackNavigatorParamList} from '../../navigations/types';
import {DATA} from '../../redux/Api/GetData';
import {Colors} from '../../styles';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const HomeScreenView = ({navigation}: NavigationProps) => {
  return (
    <View>
      <ComplexHeader
        title={'Search'}
      ></ComplexHeader>

      <View>
        <View
          style={{
            paddingHorizontal: getWidth(16),
            backgroundColor: Colors.OFF_WHITE,
          }}>
          <View>
            <FlatList
              style={{
                height: '92%',
                marginTop: getHeight(4),
              }}
              showsVerticalScrollIndicator={false}
              data={DATA}
              renderItem={({item}) => (
                <Card
                  onpressed={() => {
                    navigation.navigate('SpecificationsView');
                  }}
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
    </View>
  );
};
