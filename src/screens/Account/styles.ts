import {StyleSheet} from 'react-native';
import {getHeight, getWidth, RFValue} from '../../config/dimensions';
import {Colors, Typography} from '../../styles';

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
 /********************* */
 
maintitle: {
  marginTop: getHeight(20),
  fontSize: Typography.FONT_SIZE_14,
  fontFamily: Typography.SEMIBOLD_NUNITO,
  color: Colors.PETROLUIM,
  textAlign: 'center',
  lineHeight: Typography.LINE_HEIGHT_20,
},
divider: {
  width: getWidth(48),
  height: getHeight(4),
  backgroundColor: Colors.LIGHT_GRAY,
  alignSelf: 'center',
  borderRadius: RFValue(17),
},
mainmodalcontainer: {

  borderTopStartRadius: RFValue(20),
  borderTopEndRadius: RFValue(20),
  paddingTop: getHeight(20),
  paddingHorizontal: getWidth(24),
 backgroundColor:Colors.WHITE
},
textmodalcontainer: {
  flexDirection:"column",
  justifyContent: 'space-between',
  marginTop: getHeight(24),
  width:getWidth(327),
  height:getHeight(121),
  marginBottom:getHeight(40)
},
text: {
  fontSize: Typography.FONT_SIZE_14,
  fontFamily: Typography.REGULAR_NUNITO,
  fontWeight: Typography.FONT_WEIGHT_REGULAR500,
  color: Colors.PETROLUIM,
  textAlign:"center"
},
button:{marginTop:0,width:getWidth(327)}

});
export default styles;
