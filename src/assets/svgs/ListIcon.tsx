import * as React from "react"
import Svg, { SvgProps, Rect, Circle } from "react-native-svg"

const ListIcon = (props: SvgProps) => (
  <Svg
    width={17}
    height={17}
    fill="none"
 
    {...props}
  >
    <Rect y={0.851} width={17} height={1.7} rx={0.85} fill="#205067" />
    <Circle cx={4.25} cy={1.7} r={1.2} fill="#205067" stroke="#205067" />
    <Rect y={7.65} width={17} height={1.7} rx={0.85} fill="#205067" />
    <Circle cx={11.9} cy={8.5} r={1.2} fill="#205067" stroke="#205067" />
    <Rect y={14.451} width={17} height={1.7} rx={0.85} fill="#205067" />
    <Circle cx={7.65} cy={15.3} r={1.2} fill="#205067" stroke="#205067" />
  </Svg>
)

export default ListIcon
