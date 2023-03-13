import React from 'react';
import ArrowBack from './ArrowBackIcon';
import EyeSlashIcon from './EyeSlashIcon';
import HeadPhoneIcon from './HeadPhoneIcon';
import KeyIcon from './KeyIcon';
import PasswordSentIcon from './PasswordSentIcon';
import ProfileIcon from './ProfileIcon';
import SmsIcon from './SmsIcon';
import EyeSlashOffIcon from './EyeSlashOffIcon';
import {StyleProp} from 'react-native/types';
import {TextStyle} from 'react-native/types';
import SearchIcon from './SearchIcon';
import ListIcon from './ListIcon';
import {IconsName} from '../../@types/iconTypes';
import {SvgProps} from 'react-native-svg';
import HomeIcon from './HomeIcon';
import MessageTextIcon from './MessageTextIcon';
import FavoriteIcon from './FavoriteIcon';
import UserIcon from './UserIcon';
import BedIcon from './BedIcon';
import AreaIcon from './AreaIcon';
import BanioIcon from './BanioIcon';

export interface IconsProps {
  color?: string;
  width?: number;
  height?: number;
  name?: any;
}
type SvgIconStyle = {style?: StyleProp<TextStyle>};

export const SvgIcon = (props: IconsProps & SvgProps & SvgIconStyle) => {
  switch (props.name) {
    case 'ArrowBack':
      return <ArrowBack {...props} style={props.style} />;
    case 'EyeSlashIcon':
      return <EyeSlashIcon {...props} style={props.style} />;
    case 'HeadPhoneIcon':
      return <HeadPhoneIcon {...props} style={props.style} />;
    case 'KeyIcon':
      return <KeyIcon {...props} style={props.style} />;
    case 'PasswordSentIcon':
      return <PasswordSentIcon {...props} style={props.style} />;
    case 'ProfileIcon':
      return <ProfileIcon {...props} style={props.style} />;
    case 'SmsIcon':
      return <SmsIcon {...props} style={props.style} />;

    case 'EyeSlashOffIcon':
      return <EyeSlashOffIcon {...props} style={props.style} />;
    case 'SearchIcon':
      return <SearchIcon {...props} style={props.style} />;
    case 'ListIcon':
      return <ListIcon {...props} style={props.style} />;
    case 'HomeIcon':
      return <HomeIcon {...props} style={props.style} />;
    case 'MessageTextIcon':
      return <MessageTextIcon {...props} style={props.style} />;
    case 'FavoriteIcon':
      return <FavoriteIcon {...props} style={props.style} />;
    case 'UserIcon':
      return <UserIcon {...props} style={props.style} />;
    case 'BedIcon':
      return <BedIcon {...props} style={props.style} />;
      case 'AreaIcon':
      return <AreaIcon {...props} style={props.style} />;
      case 'BanioIcon':
        return <BanioIcon {...props} style={props.style} />;

    default:
      return null;
  }
};
