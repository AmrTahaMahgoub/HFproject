import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {fetchBuildingsData}  from '../redux/reducers/dataslice';
import{View,Text,Image,FlatList} from "react-native";

import {Card} from '../components/atoms';

  const  BuidlingFeaturesList=()=> {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchBuildingsData());
  }, [dispatch]);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>{error}</Text>;
  }

  return (
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
    
    )}></FlatList>
   </View>

    // <View>
    //   <Text>Users</Text>
    //   {/* {users.map((user) => (
    //       <Image
    //       source={{uri:"https://hfprojeplus.com/images/property_1642850137.jpg"}}>
       
    //       </Image>
    //     ))} */}
      
      // <Text>
      //   {users.map((user) => (
      //     <Text key={user.id}>{user.price}</Text>
      //   ))}
      // </Text>
   
    // </View>
  );
}

export default BuidlingFeaturesList;