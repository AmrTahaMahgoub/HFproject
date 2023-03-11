import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const ArrowBack = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    
    {...props}
  >
    <Path
      d="M15.09 20.67c.19 0 .38-.07.53-.22.29-.29.29-.77 0-1.06L9.1 12.87c-.48-.48-.48-1.26 0-1.74l6.52-6.52c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-6.52 6.52c-.51.51-.8 1.2-.8 1.93s.28 1.42.8 1.93l6.52 6.52c.15.14.34.22.53.22Z"
      fill="#fff"
    />
  </Svg>
)

export default ArrowBack
