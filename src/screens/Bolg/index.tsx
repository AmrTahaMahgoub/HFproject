import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import { StackNavigatorParamList } from '../../navigations/types';



type ScreenNavigationProp = StackNavigationProp<
StackNavigatorParamList
>;
type NavigationProps={navigation:ScreenNavigationProp }
const Blog = ({navigation}:NavigationProps) => {
  return (
    <View>
      {/* <BlogView navigation={navigation}></BlogView> */}
    </View>
  );
};
export default Blog;