import {StyleSheet} from 'react-native';
import { getHeight, getWidth, RFValue } from '../../../config/dimensions';

import {Colors, Typography} from '../../../styles';
const styles = StyleSheet.create({
    listiconcontainer: {
        width: getHeight(48),
        height: getHeight(48),
        paddingHorizontal: getWidth(16),
        paddingVertical: getHeight(15),
        backgroundColor: Colors.YELLOW,
        borderRadius: RFValue(12),
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default styles;
