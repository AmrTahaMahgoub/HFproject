import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from '../../../config/dimensions';
import {Colors} from '../../../styles';

const styles = StyleSheet.create({

  backButton: {
    marginLeft: getWidth(20),
    marginRight: getWidth(65),
  },

  title: {
    alignItems: 'center',
    alignSelf:"center",
    alignContent:"center",
   
  },

  contentHeader: {
    width: '100%',
    backgroundColor: Colors.PETROLUIM,
    height: getHeight(98),
    alignItems: 'center',
    alignSelf:"center",
    alignContent:"center"

  },
});

export default styles;
