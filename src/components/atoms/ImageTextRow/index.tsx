import { Text } from 'react-native';
import {SvgIcon} from '../../../assets/svgs';
import {ViewRow} from '../ViewRow';
import styles from './styles';

export const ImageTextRow = ({name, title}: any) => {
  return (
    <ViewRow >
      <SvgIcon name={name}></SvgIcon>
      <Text
        style={styles.text}>
        {' '}
        {title}
      </Text>
    </ViewRow>
  );
};
