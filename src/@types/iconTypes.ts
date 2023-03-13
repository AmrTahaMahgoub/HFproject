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
  | 'FavoriteIcon'
  | 'UserIcon'
  | 'BedIcon'
  | 'AreaIcon'
  |"BanioIcon"
  ;
  export interface IconsProps {
    color?: string;
    width?: number;
    height?: number;
    name: IconsName;
  }
