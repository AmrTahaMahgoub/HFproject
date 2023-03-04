import React from 'react'
import { View ,Text, Pressable} from 'react-native'
import Button from '../../atoms/Button/Button';

import { getHeight, getWidth } from '../../../config/dimensions';

import { Colors } from '../../../styles';

import styles from './styles';
import { ViewRow } from '../../atoms/ViewRow';
import SvgIcon from '../../../assets/svgs';
import { CustomText16 } from '../../atoms/Text/text';
// type HeaderProps = {
//     title?: string
//     type?: 'transparent' | 'simple'
//     onGoBack?: () => void
//     notificationCount?: number
//     // children: React.ReactNode
// }
// const Header = ({ title, type, onGoBack }) => {
//     // let { goBack } = useNavigationHooks()
// return(<SimpleHeader></SimpleHeader>)
// };

 export const SimpleHeader = (props) => {
    return (
        
        <ViewRow style={styles.contentHeader}>
        <Pressable onPress={()=>{}}><SvgIcon name={'ArrowBack'} style={styles.backButton} ></SvgIcon></Pressable>
       <CustomText16 style={styles.title}> <Text>Login into account</Text></CustomText16>
    
      
    </ViewRow>
   

    )
}   

// const Transparent = ({ onGoBack, title }: HeaderProps) => {
//     return (
//         <GradientView
//             start={{ y: .9, x: 0 }}
//             end={{ y: 0, x: 0 }}
//             colors={[Colors.RGBA_PLACK(0),
//             Colors.RGBA_PLACK(.74)]}
//             style={styles.header_container2}>
//             <ViewRow style={styles.contentHeader}>
//                 <BackButton onGoBack={onGoBack} />
//                 <Button
//                     style={styles.favoriteButton}
//                     icon={"Favorite"} />
//             </ViewRow>
//         </GradientView>
//     )
// }


