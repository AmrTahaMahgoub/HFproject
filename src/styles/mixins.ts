import { Dimensions, PixelRatio, StyleSheet } from 'react-native';


const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

interface styles {
    marginTop: string
}
export const scaleSize = (size: number) => (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

function dimensions(top: number, right = top, bottom: number = top, left: number = right, property: string): any {
    return top;
}

export function margin(top: number, right: number, bottom: number, left: number) {
    return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top: number, right: number, bottom: number, left: number) {
    return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(color: string, offset = { height: 2, width: 2 },
    radius = 8, opacity = 0.2) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}


