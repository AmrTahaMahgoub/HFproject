import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SearchIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
   
    {...props}
  >
    <Path
      d="M6.595 13.177A6.596 6.596 0 0 1 .005 6.59 6.596 6.596 0 0 1 6.596 0a6.596 6.596 0 0 1 6.588 6.589 6.596 6.596 0 0 1-6.588 6.588Zm0-11.928a5.346 5.346 0 0 0-5.34 5.34 5.346 5.346 0 0 0 5.34 5.34 5.346 5.346 0 0 0 5.34-5.34 5.346 5.346 0 0 0-5.34-5.34Zm9.216 14.568a.625.625 0 0 0 0-.883l-2.795-2.795a.624.624 0 1 0-.883.883l2.795 2.795a.623.623 0 0 0 .883 0Z"
      fill="#ADA8B8"
    />
  </Svg>
)

export default SearchIcon
