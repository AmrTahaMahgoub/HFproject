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
type SvgIconProps = {
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  name?: string;
};

export const SvgIcon = (props: SvgIconProps) => {
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

    default:
      return null;
  }
};
