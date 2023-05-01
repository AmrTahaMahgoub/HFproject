import {StyleSheet} from 'react-native';
import {getWidth, getHeight, RFValue} from '../../config/dimensions';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: Colors.PETROLUIM,
  },
  imagecontainer: {
    flex:1,
    borderTopRightRadius:RFValue(30),
    borderTopLeftRadius:RFValue(30),
    paddingHorizontal: getWidth(16),
    backgroundColor: Colors.WHITE,
    paddingTop: getHeight(30),
  },
  imagestyle: {
    width: getWidth(140),
    height: getHeight(140),
    alignSelf: 'center',
  },
  viewContainer: {
    backgroundColor: 'grey',
    height: 50,
    width: 300,
    justifyContent: 'space-between',
  },
  forgotpassword: {
    alignSelf: 'flex-end',
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
  termsandcondition: {textDecorationLine: 'underline'},
});
export default styles;
