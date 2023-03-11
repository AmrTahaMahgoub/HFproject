import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from '../../../config/dimensions';

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },

  contentHeader: {
    width: getWidth(339.16),
    flexDirection: 'row',
    paddingHorizontal: getWidth(20),
    height: getHeight(98),
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default styles;
