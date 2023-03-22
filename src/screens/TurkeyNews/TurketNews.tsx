import {View, Image, ScrollView, Text} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamList} from '../../navigations/types';
import {ImageHeader} from '../../components/organisms/Header/Header';
import {getHeight, getWidth, RFValue} from '../../config/dimensions';
import {Colors, Typography} from '../../styles';
import {
  ViewRow,
  DataSpecificationContainer,
  DefaultButton,
  IconText,
} from '../../components/atoms';
import {SvgIcon} from '../../assets/svgs';
import {images} from '../../assets';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const TurkeyNewsView = ({navigation}: NavigationProps) => {
  return (
    <ScrollView>
      <View>
        <ImageHeader
          onPress={() => {
            navigation.goBack();
          }}
          image={images.turkeynews}></ImageHeader>
      </View>
      <View
        style={{
          width: getWidth(375),
          height: getHeight(117),
          paddingVertical: getHeight(20),
          paddingHorizontal: getWidth(16),
          backgroundColor: Colors.WHITE,
          marginBottom: getHeight(12),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              backgroundColor: Colors.YELLOW,
              borderRadius: RFValue(4),
              justifyContent: 'center',
              paddingHorizontal: getWidth(8),
              height: getHeight(24),
              width: getWidth(80),
            }}>
            <Text
              style={{
                fontSize: Typography.FONT_SIZE_11,
                fontFamily: Typography.LIGHT_MANROPE,
                lineHeight: Typography.LINE_HEIGHT_15,

                textAlign: 'center',
              }}>
              Turkey news
            </Text>
          </View>
          <SvgIcon name="SharedYellowIcon"></SvgIcon>
        </View>
        <Text
          style={{
            fontSize: Typography.FONT_SIZE_16,
            fontFamily: Typography.BOLD_NUNITO,
            lineHeight: Typography.LINE_HEIGHT_20,
            fontWeight: Typography.FONT_WEIGHT_BOLD,
            color: Colors.PETROLUIM,
          }}>
          The title of the post here
        </Text>
        <Text
          style={{
            fontSize: Typography.FONT_SIZE_14,
            fontFamily: Typography.REGULAR_MULISH,
            lineHeight: Typography.LINE_HEIGHT_16,

            color: Colors.DARKY_LIGHT_GRAY,
          }}>
          07/01/2022
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.WHITE,
          paddingHorizontal: getWidth(16),
          paddingVertical: getHeight(16),
          height: getHeight(406),
          width: getWidth(375),
        }}>
        <Text
          style={{
            fontSize: Typography.FONT_SIZE_14,
            fontFamily: Typography.MEDIUM_NUNITO,
            lineHeight: Typography.LINE_HEIGHT_16,

            color: Colors.DARKY_LIGHT_GRAY,
            marginBottom: getHeight(16),
          }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here
        </Text>
        <Text
          style={{
            fontSize: Typography.FONT_SIZE_14,
            fontFamily: Typography.MEDIUM_NUNITO,
            lineHeight: Typography.LINE_HEIGHT_16,
            marginBottom: getHeight(16),
            color: Colors.DARKY_LIGHT_GRAY,
          }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here
        </Text>
        <Text
          style={{
            fontSize: Typography.FONT_SIZE_14,
            fontFamily: Typography.MEDIUM_NUNITO,
            lineHeight: Typography.LINE_HEIGHT_16,

            color: Colors.DARKY_LIGHT_GRAY,
          }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here
        </Text>
      </View>
    </ScrollView>
  );
};
