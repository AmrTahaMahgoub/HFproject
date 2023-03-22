import {StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import {IconsName} from '../../../@types/iconTypes';
import {SvgIcon} from '../../../assets/svgs';
import {getHeight} from '../../../config/dimensions';
import {Colors, Typography} from '../../../styles';
import {ViewRow} from '../ViewRow';
type IconTexttype = {
  texttitle: String;
  svgname: IconsName;
  style?: StyleProp<ViewStyle> | undefined;
  children?: React.ReactNode;
  textstyle?: StyleProp<TextStyle> | undefined;
};

export const IconText = ({
  texttitle,
  svgname,
  children,
  style,
  textstyle,
}: IconTexttype) => {
  return (
    <ViewRow style={style}>
      <SvgIcon name={svgname}></SvgIcon>
      <Text
        style={[
          {
            fontSize: Typography.FONT_SIZE_14,
            fontFamily: Typography.REGULAR_NUNITO,
            fontWeight: Typography.FONT_WEIGHT_REGULAR,
            lineHeight: Typography.LINE_HEIGHT_16,
            color: Colors.SEMI_BLACK,
            marginLeft: getHeight(8),
          },
          textstyle,
        ]}>
        {texttitle}
      </Text>
      {children}
    </ViewRow>
  );
};
