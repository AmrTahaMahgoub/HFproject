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

function SvgIcon(props) {
  switch (props.name) {
    case 'ArrowBack':
      return <ArrowBack  />;
    case 'EyeSlashIcon':
      return <EyeSlashIcon />;
    case 'HeadPhoneIcon':
      return <HeadPhoneIcon  />;
    case 'KeyIcon':
      return <KeyIcon  />;
    case 'PasswordSentIcon':
      return <PasswordSentIcon  />;
    case 'ProfileIcon':
      return <ProfileIcon />;
    case 'SmsIcon':
      return <SmsIcon />;
    // tab button navigation icons
    case 'EyeSlashOffIcon':
      return <EyeSlashOffIcon  />;
    // case 'Favorites':
    //   return <FavoritesIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'AddAds':
    //   return <AddIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'Categories':
    //   return <CategoriesIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'Account':
    //   return <AccountIcon {...props} style={[props.rotate && style, props.style]} />;

    // account tab icons

    // case 'MoneyIcon':
    //   return <MoneyIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'AboutIcon':
    //   return <AboutIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'LockIcon':
    //   return <LockIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'TermsAndCondationIcon':
    //   return <TermsAndCondationIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'SettingIcon':
    //   return <SettingIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'PhoneIcon':
    //   return <PhoneIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'HelpIcon':
    //   return <HelpIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'LogoutIcon':
    //   return <LogoutIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'ArrowIcon':
    //   return <ArrowIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'AddImageIcon':
    //   return <AddImageIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'CloseIcon':
    //   return <CloseIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'WhatsIcon':
    //   return <WhatsIcon {...props} style={[props.rotate && style, props.style]} />;
    // case 'ShowPassword':
    //   return <ShowPassword {...props} style={[props.rotate && style, props.style]} />;
    // case 'HidePassword':
    //   return <HidePassword {...props} style={[props.rotate && style, props.style]} />;
    //   case 'MasterCard':
    //     return <MasterCard {...props} style={[props.rotate && style, props.style]} />;
    //     case 'VerficationPhoneIcon':
    //       return <VerficationPhoneIcon {...props} style={[props.rotate && style, props.style]} />;

    default:
      return <ProfileIcon />;
  }
}

const getRotate = rotate => {
  switch (rotate) {
    case 'top':
      return '90deg';
    case 'bottom':
      return '270deg';
    case 'left':
      return '0deg';
    case 'right':
      return '-180deg';
    default:
      return '0deg';
  }
};

SvgIcon.defaultProps = {
  size: 14,
};
export default SvgIcon;
