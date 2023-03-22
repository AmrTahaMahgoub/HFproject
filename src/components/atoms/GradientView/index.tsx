
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../styles';
import styles from './styles';


type GradientViewProps = {
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle> | undefined;
    colors?: (string | number)[];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
    locations?: number[];
    useAngle?: boolean;
    angleCenter?: { x: number, y: number };
    angle?: number;
}
export const GradientView = (props: GradientViewProps) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: .4 }}
            {...props}
            style={[styles.container, props.style]}
            colors={props.colors || Colors.PRIMARY_GRADIENT}
        >
            {props.children}
        </LinearGradient>
    )
}