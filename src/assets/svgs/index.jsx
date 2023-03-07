import React from 'react';
import ArrowBack from './ArrowBackIcon';
import EyeSlashIcon from './EyeSlashIcon';
import HeadPhoneIcon from './HeadPhoneIcon';
import KeyIcon from './KeyIcon';
import PasswordSentIcon from './PasswordSentIcon';
import ProfileIcon from './ProfileIcon';
import SmsIcon from './SmsIcon';
import EyeSlashOffIcon from './EyeSlashOffIcon';

function SvgIcon(props) {
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

    default:
      return null;
  }
}

export default SvgIcon;
