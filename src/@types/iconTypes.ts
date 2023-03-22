export type IconsName =
  | 'ArrowBack'
  | 'EyeSlashIcon'
  | 'EyeSlashOffIcon'
  | 'HeadPhoneIcon'
  | 'KeyIcon'
  | 'PasswordSentIcon'
  | 'ProfileIcon'
  | 'SmsIcon'
  | 'SearchIcon'
  | 'ListIcon'
  | 'HomeIcon'
  | 'MessageTextIcon'
  | 'UserIcon'
  | 'BedIcon'
  | 'AreaIcon'
  | 'BanioIcon'
  | 'UnFavoriteIcon'
  | 'FavoriteIcon'
  |"ProfileCircle"
  |"InternetCircule"
  |"BlueCheckIcon"
  |"SharedYellowIcon"
  |"NavigationPetroluimIcon"
  |"MapIcon"
  |"Type"
  |"Floor"
  |"Garage"
  |"Star"
  |"Pen"
  |"CheckYellowIcon"
  |"CallNow"
  |"PetroluimCallNow"
  |"PetroluimMessage"
  |"SendIcon"

export interface IconsProps {
  color?: string;
  width?: number;
  height?: number;
  name: IconsName;
}
