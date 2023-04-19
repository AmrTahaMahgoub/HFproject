import {StackNavigationProp} from '@react-navigation/stack';
import {Animated, FlatList, View,Text} from 'react-native';
import {AnimatedCard, Card} from '../../components/atoms';
import {ComplexHeader} from '../../components/organisms/Header/Header';
import {getHeight, getWidth} from '../../config/dimensions';
import {StackNavigatorParamList} from '../../navigations/types';
import {DATA} from '../../redux/Api/GetData';
import {Colors} from '../../styles';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBuildingsData } from '../../redux/reducers/dataslice';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const HomeScreenView = ({navigation}: NavigationProps) => {
  // const dispatch = useDispatch<any>();
  // const users = useSelector((state:any) => state.users.users);
  // const status = useSelector((state:any) => state.users.status);
  // const error = useSelector((state:any) => state.users.error);
  // useEffect(() => {
  //   dispatch(fetchBuildingsData());
  // }, [dispatch]);

  // if (status === 'loading') {
  //   return <Text>Loading...</Text>;
  // }

  // if (status === 'failed') {
  //   return <Text>{error}</Text>;
  // }
  const scrollY = useRef(new Animated.Value(0)).current;
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
            <Animated.FlatList
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: true })}
              style={{
                height: '92%',
                marginTop: getHeight(4),
              }}
              showsVerticalScrollIndicator={false}
              data={DATA}
              renderItem={({item ,index}) => {
                const inputRange = [
                  -1, 0, 100 * index, 400 * (index + 2)
              ]
              const opacityInputRange = [
                  -1, 0, 1 * index, 350 * (index + 0.1)
              ]
              const scale = scrollY.interpolate({
                  inputRange,
                  outputRange: [1, 1, 1, 0]
              })
              const opacity = scrollY.interpolate({
                  inputRange: opacityInputRange,
                  outputRange: [1, 1, 1, 0]
              })
                
                return<AnimatedCard
                
                style={{transform:[{scale}],
                opacity:opacity}}
                  onpressed={() => {
                    navigation.navigate('SpecificationsView');
                  }}
                  
                  biano={item.banio}
                  area={item.area}
                  bed={item.bed}
                  image={item.image}
                  price={item.price}
                  id={item.id}
                  ></AnimatedCard>
}}></Animated.FlatList>
          </View>
        </View>
      </View>
    </View>
  );
};
