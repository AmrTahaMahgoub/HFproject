import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ArrowForward = (props: SvgProps) => (
  <Svg
    width={7}
    height={12}
    fill="none"

    {...props}
  >
    <Path
      d="M.94 11.78a.495.495 0 0 1-.354-.147.503.503 0 0 1 0-.706L4.933 6.58a.82.82 0 0 0 0-1.16L.586 1.073a.503.503 0 0 1 0-.706.503.503 0 0 1 .707 0L5.64 4.713c.34.34.533.8.533 1.287 0 .487-.187.947-.533 1.287l-4.347 4.346a.524.524 0 0 1-.353.147Z"
      fill="#2E3439"
    />
  </Svg>
)

export default ArrowForward
