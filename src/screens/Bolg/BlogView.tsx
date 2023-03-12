import {StackNavigationProp} from '@react-navigation/stack';
import { View } from 'react-native';
import { ComplexHeader } from '../../components/organisms/Header/Header';
import { BottomTabNavigatorTypes } from '../../navigations/types';




type ScreenNavigationProp = StackNavigationProp<BottomTabNavigatorTypes>;
type NavigationProps = {navigation: ScreenNavigationProp};


export const BlogView = ({navigation}: NavigationProps) => {return <View>
    <ComplexHeader  title={'blog'}  onPressed={() => {
        
        }} ></ComplexHeader>
       
</View>}