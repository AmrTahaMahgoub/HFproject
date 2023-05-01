import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList, SectionList, Text, View} from 'react-native';
//rrimport {Card} from '../../components/atoms/Card/Container';
import {MainHeader} from '../../components/organisms/Header/Header';
import {getHeight} from '../../config/dimensions';
import {BottomTabNavigatorTypes} from '../../navigations/types';
import {DATA} from '../../redux/Api/GetData';
import {Strings} from '../../styles';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBuildingsData } from '../../redux/reducers/dataslice';
import { Loader ,Card} from '../../components/atoms';
//import { AsyncThunkAction, AsyncThunkAction } from '@reduxjs/toolkit';

type ScreenNavigationProp = StackNavigationProp<BottomTabNavigatorTypes>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const FavoriteScreenView = ({navigation}: NavigationProps) => {
  const dispatch = useDispatch<any>();
  const users = useSelector((state:any) => state.users.users);
  const status = useSelector((state:any) => state.users.status);
  const error = useSelector((state:any) => state.users.error);
  useEffect(() => {
    dispatch(fetchBuildingsData());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <View style={{marginTop:"100%"}}>
        <Loader  loading></Loader>
      </View>
    );
  }

  if (status === 'failed') {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <MainHeader title={'Favorites'} IsIconShown={false}></MainHeader>
      <View style={{paddingHorizontal: getHeight(16)}}>
     <View >
     <SectionList 
    showsVerticalScrollIndicator={false}
        sections={[{type:"properties", data: users},{type:"Blog posts", data: users}]}
        renderItem={({item}) => (
          <Card
          biano={item.baths}
            area={item.size}
            bed={item.beds}
           image={item.image}
            price={item.price}
            id={item.id}
            ></Card>
        )}
        renderSectionHeader={({ section }: { section: { type: string } }) => (
          <Text style={styles.properties} >{section.type}</Text>
        )}
        >

        </SectionList>
     </View>
        {/* <SectionList 
        sections={[{type:"BLOGPOSTS", data: users}]}
        renderItem={({item}) => (
          <Card
          biano={item.baths}
            area={item.size}
            bed={item.beds}
           image={item.image}
            price={item.price}
            id={item.id}
            ></Card>
        )}
        renderSectionHeader={({section: {type}}) => (
          <Text style={styles.properties} >{type}</Text>
        )}
        >

        </SectionList> */}
      
      </View>
    </View>
  );
};

          {/* <FlatList
            style={{height: '19%'}}
            showsVerticalScrollIndicator={false}
            data={users}
            renderItem={({item}) => (
              <Card
              biano={item.baths}
                area={item.size}
                bed={item.beds}
               image={item.image}
                price={item.price}
                id={item.id}
                ></Card>
            )}></FlatList>
        </View>
        <Text style={styles.Blogposts}>{Strings.BLOGPOSTS}</Text>
        <View>
          <FlatList
            style={{height: '100%'}}
            showsVerticalScrollIndicator={false}
            data={users}
            renderItem={({item}) => (
              <Card
              biano={item.baths}
                area={item.size}
                bed={item.beds}
               image={item.image}
                price={item.price}
                id={item.id}
                ></Card>
            )}></FlatList> */}