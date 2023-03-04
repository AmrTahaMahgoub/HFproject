import React from 'react';
import ArrowBack from './ArrowBackIcon';
import EyeSlashIcon from './EyeSlashIcon';
import HeadPhoneIcon from './HeadPhoneIcon';
import KeyIcon from './KeyIcon';
import PasswordSentIcon from './PasswordSentIcon';
import ProfileIcon from './ProfileIcon';
import SmsIcon from './SmsIcon';
import EyeSlashOffIcon from './EyeSlashOffIcon';
// import NotificationIcon from './NotificationIcon';
// import FilterIcon from './FilterIcon';
// import SearchIcon from './SearchIcon';
// import Avatar from './Avatar';
// import Location from './Location';
// import Unfavorite from './Unfavorite';
// import HomeIcon from './HomeIcon';
// import AccountIcon from './AccountIcon';
// import CategoriesIcon from './CategoriesIcon';
// import AddIcon from './AddIcon';
// import { SvgProps } from 'react-native-svg';
// import { IconsProps } from '../../@types/iconsTypes';
// import FavoritesIcon from './FavoritesIcon';
// import Favorite from './Favorite';
// import MoneyIcon from './MoneyIcon';
// import AboutIcon from './AboutIcon';
// import LockIcon from './LockIcon';
// import TermsAndCondationIcon from './TermsAndCondationIcon';
// import SettingIcon from './SettingIcon';
// import PhoneIcon from './PhoneIcon';
// import HelpIcon from './HelpIcon';
// import LogoutIcon from './LogoutIcon';
// import ArrowIcon from './ArrowIcon';
// import AddImageIcon from './AddImageIcon';
// import CloseIcon from './CloseIcon';
// import WhatsIcon from './WhatsIcon';
// import HidePassword from './HidePassword';
// import ShowPassword from './ShowPassword';
// import MasterCard from './MasterCard';
// import VerficationPhoneIcon from './VerficationPhoneIcon';

function SvgIcon(props  ) {
  switch (props.name) {
    case 'ArrowBack':
      return <ArrowBack {...props} style={ props.style} />;
    case 'EyeSlashIcon':
      return <EyeSlashIcon {...props} style={ props.style} />;
    case 'HeadPhoneIcon':
      return <HeadPhoneIcon {...props} style={ props.style} />;
    case 'KeyIcon':
      return <KeyIcon {...props} style={ props.style} />;
    case 'PasswordSentIcon':
      return <PasswordSentIcon {...props} style={ props.style} />;
    case 'ProfileIcon':
      return <ProfileIcon {...props} style={ props.style}/>;
    case 'SmsIcon':
      return <SmsIcon {...props} style={ props.style}/>;
    // tab button navigation icons
    case 'EyeSlashOffIcon':
      return <EyeSlashOffIcon {...props} style={ props.style} />;


    default:
      return null;
  }
}


export default SvgIcon;
