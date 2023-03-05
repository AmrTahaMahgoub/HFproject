import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from '../../../config/dimensions';
import {Colors} from '../../../styles';

const styles = StyleSheet.create({

  backButton: {
    marginLeft: getWidth(27.24),
  },

  title: {
    marginLeft: getWidth(93.76),
  },

  contentHeader: {
    width: '100%',
    backgroundColor: Colors.PETROLUIM,
    height: getHeight(98),
    alignItems: 'center',

  },
});

export default styles;
