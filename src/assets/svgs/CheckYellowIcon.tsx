import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

const CheckYellowIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
 
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8Z"
        fill="#F0DB04"
      />
      <Path
        d="M12.055 6.305 7.72 10.638a.665.665 0 0 1-.942 0L4.612 8.47a.666.666 0 1 1 .943-.942L7.25 9.224l3.862-3.862a.666.666 0 1 1 .943.943Z"
        fill="#2E3439"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default CheckYellowIcon
