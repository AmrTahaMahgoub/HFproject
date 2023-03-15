import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const AreaIcon = (props: SvgProps) => (
  <Svg
    width={14.8}
    height={14.8}
    fill="none"
  
    {...props}
  >
    <Path
      d="M13.133.6H.867A.267.267 0 0 0 .6.867v12.266c0 .148.12.267.267.267h12.266c.148 0 .267-.12.267-.267V.867A.266.266 0 0 0 13.133.6Zm-.266 12.267H1.133V1.133h11.734v11.734Z"
      fill="#205067"
    />
  </Svg>
)

export default AreaIcon
