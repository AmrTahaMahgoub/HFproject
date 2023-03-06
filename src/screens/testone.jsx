import React from "react";
import {View,Text, Pressable} from "react-native";
 export const TestOne=({navigation})=>{
    return (<View><Pressable onPress={()=>{navigation.navigate('TestTwo')}}>
        <Text style={{fontSize:50}}> screen one</Text></Pressable></View>)
}
