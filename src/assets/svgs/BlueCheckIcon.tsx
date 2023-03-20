import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

const BlueCheckIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"

    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0Z"
        fill="#205067"
      />
      <Path
        d="m15.068 7.88-5.416 5.417a.831.831 0 0 1-1.179 0L5.765 10.59a.832.832 0 1 1 1.178-1.178l2.12 2.119 4.827-4.827a.832.832 0 1 1 1.178 1.178Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default BlueCheckIcon
