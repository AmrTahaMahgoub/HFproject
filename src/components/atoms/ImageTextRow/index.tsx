import {StyleProp, Text, TextStyle} from 'react-native';
import {SvgIcon} from '../../../assets/svgs';
import {getWidth} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';
import {ViewRow} from '../ViewRow';

export const ImageTextRow = ({name, title}: any) => {
  return (
    <ViewRow>
      <SvgIcon name={name}></SvgIcon>
      <Text
        style={{
          fontSize: Typography.FONT_SIZE_12,
          fontFamily: Typography.MEDIUM_NUNITO,
          color: Colors.PETROLUIM,
          marginLeft: getWidth(8),
        }}>
        {' '}
        {title}
      </Text>
    </ViewRow>
  );
};
