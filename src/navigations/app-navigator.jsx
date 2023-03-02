import React from 'react';
import Splash from '../screens/Splash';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';

export function AppStackNavigator() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
                name="SignIn"
                component={SignIn} />

            {/* <Stack.Screen
                name="SignUp"
                component={SignUp} />
            <Stack.Screen
                name="SignIn"
                component={SignIn} />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword} />
            <Stack.Screen
                initialParams={{ phone: '' }}
                name="VerificationCode"
                component={VerificationCode} />

            <Stack.Screen
                name="ChangeForgotPassword"
                component={ChangeForgotPassword} />

            <Stack.Screen
                name="Payment"
                component={Payment} />
                       <Stack.Screen
                name="AllComments"
                component={AllComments} />

            <Stack.Screen
                name="AdsDetails"

                options={{
                    cardStyle: { backgroundColor: "transparent" }, cardStyleInterpolator: ({ current: { progress } }) => {
                        return { cardStyle: { opacity: progress } }
                    }
                }}
                // sharedElements={(route, otherRoute, showing) => {
                //     const { item } = route.params;
                //     return [{ id: `item.${item.id}.photo`, resize: "clip", align: "center-top", animation: "fade" },
                //     ];
                // }}
                component={AdsDetails} /> */}
    </Stack.Navigator>
  );
}
