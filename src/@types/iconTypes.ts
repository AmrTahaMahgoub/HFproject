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
  | 'UserIcon';
  export interface IconsProps {
    color?: string;
    width?: number;
    height?: number;
    name: IconsName;
  }
