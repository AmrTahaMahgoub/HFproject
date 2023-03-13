import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList, Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconProps} from 'react-native-vector-icons/Icon';
import {images} from '../../assets';
import {SvgIcon} from '../../assets/svgs';
import {ImageTextRow, ViewRow} from '../../components/atoms';
import {Card} from '../../components/atoms/Card/Card';
import {ComplexHeader} from '../../components/organisms/Header/Header';
import {getHeight, getWidth, RFValue} from '../../config/dimensions';
import {BottomTabNavigatorTypes} from '../../navigations/types';
import {DATA} from '../../redux/Api/GetData';

import {Colors, Typography} from '../../styles';

type ScreenNavigationProp = StackNavigationProp<BottomTabNavigatorTypes>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const HomeScreenView = ({navigation}: NavigationProps) => {
  return (
    <View>
      <ComplexHeader title={'Search'} onPressed={() => {}}></ComplexHeader>
      <ScrollView accessibilityElementsHidden={true}>
        <View
          style={{paddingHorizontal: getWidth(16),
           backgroundColor: Colors.OFF_WHITE
           }}>
          <FlatList
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
      </ScrollView>
    </View>
  );
};
