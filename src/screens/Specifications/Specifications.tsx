import {View, ScrollView, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamList} from '../../navigations/types';
import {ImageHeader} from '../../components/organisms/Header/Header';
import {Colors, Strings} from '../../styles';
import {
  ViewRow,
  DataSpecificationContainer,
  DefaultButton,
  IconText,
} from '../../components/atoms';
import {SvgIcon} from '../../assets/svgs';
import styles from './styles';
import {images} from '../../assets';

type ScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;
type NavigationProps = {navigation: ScreenNavigationProp};

export const SpecificationsView = ({navigation}: NavigationProps) => {
  return (
    <ScrollView>
      <View>
        <ImageHeader
          onPress={() => {
            navigation.goBack();
          }}
          image={images.bigsizebuilding}></ImageHeader>
      </View>
      <View style={styles.projectcontainer}>
        <ViewRow style={styles.projecttexticoncontainer}>
          <Text style={styles.projecttext}>{Strings.PROJECT}</Text>
          <SvgIcon name={'SharedYellowIcon'}></SvgIcon>
        </ViewRow>
        <Text style={styles.price}>{Strings.MONEY}</Text>

        <IconText
          texttitle={'Istanboul, Turkey'}
          svgname={'NavigationPetroluimIcon'}
          textstyle={styles.navigationicontext}></IconText>
      </View>
      <DataSpecificationContainer title={'Specifications'}>
        <View style={styles.specificationcontainer}>
          <View style={styles.firstspecicloumndata}>
            <IconText
              texttitle={'Type'}
              svgname={'Type'}
              textstyle={styles.Specificationstext}></IconText>
            <IconText
              texttitle={'Floor'}
              svgname={'Floor'}
              textstyle={styles.Specificationstext}></IconText>
            <IconText
              texttitle={'Garages'}
              svgname={'Garage'}
              textstyle={styles.Specificationstext}></IconText>
          </View>
          <View style={styles.secontspeciccolumndata}>
            <IconText
              texttitle={'Usage case'}
              svgname={'Type'}
              textstyle={styles.Specificationstext}></IconText>
            <IconText
              texttitle={'Energy rating'}
              svgname={'Star'}
              textstyle={styles.Specificationstext}></IconText>
            <IconText
              texttitle={'Reference'}
              svgname={'Pen'}
              textstyle={styles.Specificationstext}></IconText>
          </View>
        </View>
      </DataSpecificationContainer>
      <DataSpecificationContainer title={'Discription'}>
        <Text style={styles.descriptiontext}>{Strings.DESCRIPTION}</Text>
      </DataSpecificationContainer>
      <DataSpecificationContainer title={'Extras'}>
        <View style={styles.specificationcontainer}>
          <View style={styles.firstspecicloumndata}>
            <IconText
              texttitle={'24/7 Security'}
              svgname={'CheckYellowIcon'}
              textstyle={styles.Specificationstext}></IconText>
            <IconText
              texttitle={'Central cooling'}
              svgname={'CheckYellowIcon'}
              textstyle={styles.Specificationstext}></IconText>
            <IconText
              texttitle={'Indoor parking'}
              svgname={'CheckYellowIcon'}
              textstyle={styles.Specificationstext}></IconText>
            <IconText
              texttitle={'Green areas'}
              svgname={'CheckYellowIcon'}
              textstyle={styles.Specificationstext}></IconText>
          </View>
          <View style={styles.secontspeciccolumndata}>
            <IconText
              texttitle={'Fire alarm'}
              svgname={'CheckYellowIcon'}
              textstyle={styles.Specificationstext}></IconText>
            <IconText
              texttitle={'Cafes & Restaurant'}
              svgname={'CheckYellowIcon'}
              textstyle={styles.Specificationstext}></IconText>
            <IconText
              texttitle={'Sauna'}
              svgname={'CheckYellowIcon'}
              textstyle={styles.Specificationstext}></IconText>
            <IconText
              texttitle={'Gym'}
              svgname={'CheckYellowIcon'}
              textstyle={styles.Specificationstext}></IconText>
          </View>
        </View>
      </DataSpecificationContainer>
      <DataSpecificationContainer title={'Location'}>
        <DefaultButton>
          <IconText texttitle={'Open Map'} svgname={'MapIcon'}></IconText>
        </DefaultButton>
      </DataSpecificationContainer>
      <DefaultButton style={{backgroundColor: Colors.PETROLUIM}}>
        <IconText
          texttitle={'Call Now'}
          textstyle={{color: Colors.WHITE}}
          svgname={'CallNow'}></IconText>
      </DefaultButton>
    </ScrollView>
  );
};
