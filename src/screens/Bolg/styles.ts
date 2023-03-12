import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from '../../config/dimensions';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  maincontainer: {height: getHeight(126.66), backgroundColor: Colors.PETROLUIM},
  mixedrow: {
    alignSelf: 'center',
    alignItems: 'baseline',
    alignContent: 'center',
  },
  contactus: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  imagecontainer: {
    height: getHeight(668),
    paddingHorizontal: getWidth(16),
    backgroundColor: Colors.WHITE,
    paddingTop: getHeight(30),
  },
  imagestyle: {
    width: getWidth(140),
    height: getHeight(140),
    alignSelf: 'center',
  },
});
export default styles;
