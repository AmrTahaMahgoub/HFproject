import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const SmsIcon = (props:SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
  
    {...props}
  >
    <Path
      d="M11.334 14.167H4.667c-2.433 0-3.834-1.4-3.834-3.833V5.667c0-2.433 1.4-3.833 3.834-3.833h6.667c2.433 0 3.833 1.4 3.833 3.833v4.667c0 2.433-1.4 3.833-3.833 3.833ZM4.667 2.833c-1.907 0-2.833.927-2.833 2.834v4.667c0 1.906.926 2.833 2.833 2.833h6.667c1.906 0 2.833-.927 2.833-2.833V5.667c0-1.907-.927-2.833-2.833-2.833H4.667Z"
      fill="#ADA8B8"
    />
    <Path
      d="M8 8.58c-.56 0-1.127-.173-1.56-.527L4.353 6.387a.499.499 0 0 1 .62-.78L7.06 7.273c.506.407 1.366.407 1.873 0l2.087-1.666a.492.492 0 0 1 .7.08.492.492 0 0 1-.08.7L9.553 8.053c-.427.354-.993.527-1.553.527Z"
      fill="#ADA8B8"
    />
  </Svg>
)

export default SmsIcon