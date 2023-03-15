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
  |"FavoriteIcon";
export interface IconsProps {
  color?: string;
  width?: number;
  height?: number;
  name: IconsName;
}
