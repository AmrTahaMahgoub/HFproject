import {StyleSheet} from 'react-native';
import {RFValue, getHeight, getWidth} from '../../config/dimensions';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  maincontainer: {height: getHeight(126.66), backgroundColor: Colors.PETROLUIM},
  viewContainer: {
    backgroundColor: 'grey',
    height: 50,
    width: 300,
    justifyContent: 'space-between',
  },
  forgotpassword: {
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
  },
  mixedrow: {
    alignSelf: 'center',
    alignItems: 'baseline',
    alignContent: 'center',
  },
  registernow: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  imagecontainer: {
    borderTopRightRadius:RFValue(30),
    borderTopLeftRadius:RFValue(30),
    height: getHeight(800),
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
