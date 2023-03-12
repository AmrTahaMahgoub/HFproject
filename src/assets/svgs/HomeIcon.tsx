import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const HomeIcon = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
 
    {...props}
  >
    <Path
      d="m10 .667.433-.507a.666.666 0 0 0-.866 0L10 .667Zm-9.333 8L.233 8.16 0 8.36v.307h.667Zm6.666 10.666V20A.667.667 0 0 0 8 19.333h-.667Zm5.334 0H12a.666.666 0 0 0 .667.667v-.667Zm6.666-10.666H20V8.36l-.233-.2-.434.507ZM2 20h5.333v-1.333H2V20ZM19.767 8.16l-9.334-8-.866 1.013 9.333 8 .867-1.013Zm-10.2-8-9.334 8L1.1 9.173l9.333-8L9.567.16ZM8 19.333v-4H6.667v4H8Zm4-4v4h1.333v-4H12ZM12.667 20H18v-1.333h-5.333V20ZM20 18V8.667h-1.333V18H20ZM0 8.667V18h1.333V8.667H0Zm10 4.666a2 2 0 0 1 2 2h1.333A3.333 3.333 0 0 0 10 12v1.333ZM10 12a3.333 3.333 0 0 0-3.333 3.333H8a2 2 0 0 1 2-2V12Zm8 8a2 2 0 0 0 2-2h-1.333a.667.667 0 0 1-.667.667V20ZM2 18.667A.667.667 0 0 1 1.333 18H0a2 2 0 0 0 2 2v-1.333Z"
      fill="#205067"
    />
  </Svg>
)

export default HomeIcon
