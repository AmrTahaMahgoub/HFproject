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
import {SvgProps} from 'react-native-svg';
import HomeIcon from './HomeIcon';
import MessageTextIcon from './MessageTextIcon';
import UserIcon from './UserIcon';
import BedIcon from './BedIcon';
import AreaIcon from './AreaIcon';
import BanioIcon from './BanioIcon';
import UnFavoriteIcon from './unFavoriteIcon';
import FavoriteIcon from './favoriteIcon';
import ProfileCircle from './ProfileCircle';
import InternetCircule from './InternetCircule';
import ExcelemationCircule from './ExcelemationCircule';
import MessageEdit from './MessageEdit';
import ArrowForward from './ArrowForward';
import BlueCheckIcon from './BlueCheckIcon';
import SharedYellowIcon from './SharedYellowIcon';
import NavigationPetroluimIcon from './NavigationPetroluimIcon';
import MapIcon from './MapIcon';
import Type from './Type';
import Floor from './Floor';
import Garage from './Garage';
import Star from './Star';
import Pen from './Pen';
import CheckYellowIcon from './CheckYellowIcon';
import CallNow from './CallNow';
import PetroluimCallNow from './PetroluimCallNow';
import PetroluimMessage from './PetroluimMessage';
import SendIcon from './SendIcon';

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
    case 'UnFavoriteIcon':
      return <UnFavoriteIcon {...props} style={props.style} />;
    case 'UserIcon':
      return <UserIcon {...props} style={props.style} />;
    case 'BedIcon':
      return <BedIcon {...props} style={props.style} />;
    case 'AreaIcon':
      return <AreaIcon {...props} style={props.style} />;
    case 'BanioIcon':
      return <BanioIcon {...props} style={props.style} />;
    case 'FavoriteIcon':
      return <FavoriteIcon {...props} style={props.style} />;
    case 'ProfileCircle':
      return <ProfileCircle {...props} style={props.style} />;
    case 'InternetCircule':
      return <InternetCircule {...props} style={props.style} />;
    case 'ExcelemationCircule':
      return <ExcelemationCircule {...props} style={props.style} />;
    case 'MessageEdit':
      return <MessageEdit {...props} style={props.style} />;
    case 'ArrowForward':
      return <ArrowForward {...props} style={props.style} />;
    case 'BlueCheckIcon':
      return <BlueCheckIcon {...props} style={props.style} />;
    case 'SharedYellowIcon':
      return <SharedYellowIcon {...props} style={props.style} />;
    case 'NavigationPetroluimIcon':
      return <NavigationPetroluimIcon {...props} style={props.style} />;
    case 'MapIcon':
      return <MapIcon {...props} style={props.style} />;
    case 'Type':
      return <Type {...props} style={props.style} />;
    case 'Floor':
      return <Floor {...props} style={props.style} />;
    case 'Garage':
      return <Garage {...props} style={props.style} />;
    case 'Star':
      return <Star {...props} style={props.style} />;
    case 'Pen':
      return <Pen {...props} style={props.style} />;
    case 'CheckYellowIcon':
      return <CheckYellowIcon {...props} style={props.style} />;
    case 'CallNow':
      return <CallNow {...props} style={props.style} />;
    case 'PetroluimCallNow':
      return <PetroluimCallNow {...props} style={props.style} />;
    case 'PetroluimMessage':
      return <PetroluimMessage {...props} style={props.style} />;
    case 'SendIcon':
      return <SendIcon {...props} style={props.style} />;

    default:
      return null;
  }
};
