import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SvgIcon } from "../../../assets/svgs";
import { ViewRow } from "../ViewRow";
import styles from "./styles";

export const TouchableTextSvg=({title}:any)=>{
    let [isChecked, setChecked] = useState(false);
    return (
        <TouchableOpacity
          
        onPress={() => {
          setChecked(!isChecked);
        }}>
        
        <ViewRow style={{justifyContent:"space-between"}}>
          <Text style={styles.text}>{title}</Text>
          {isChecked && <SvgIcon name={'BlueCheckIcon'}></SvgIcon>}
        </ViewRow>
        
      </TouchableOpacity>
    );
}