import {Pressable, View} from 'react-native';
import {SvgIcon} from '../../../assets/svgs';
import styles from './styles';
type SortedFilterProps = {
  onPressed?: () => void;
};
export const SortedFilter = (props: SortedFilterProps) => {
  return (
    <Pressable onPress={props.onPressed}>
      <View style={styles.listiconcontainer}>
        <SvgIcon name={'ListIcon'}></SvgIcon>
      </View>
    </Pressable>
  );
};
