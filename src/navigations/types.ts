import { IconsName } from "../@types/iconTypes";

export type StackNavigatorParamList = {
  Splash: undefined;
  SignUpView: undefined;
  SignInView: undefined;
  PasswardResretView: undefined;
  BottomTabNavigator: undefined;
  SpecificationsView:undefined;
  TurkeyNewsView:undefined;
  AboutUsView:undefined;
  ContactUsView:undefined
};
export type BottomTabNavigatorTypes = {
  Home: {icon?: IconsName};
  Blog: {icon?: IconsName};
  Favourites: {icon?: IconsName};
  Account: {icon?: IconsName};
};