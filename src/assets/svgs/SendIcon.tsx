import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SendIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={14}
    fill="none"
  
    {...props}
  >
    <Path
      d="M15.047 5.573 2.137.216a1.537 1.537 0 0 0-1.602.26c-.446.385-.632.979-.486 1.55L1.198 6.53h5.626a.469.469 0 0 1 0 .938H1.198l-1.15 4.506c-.145.57.041 1.164.487 1.55.446.386 1.06.484 1.603.259l12.91-5.357C15.634 8.183 16 7.637 16 7c0-.636-.365-1.183-.953-1.427Z"
      fill="#2E3439"
    />
  </Svg>
)

export default SendIcon
