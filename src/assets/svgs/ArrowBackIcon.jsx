import * as React from "react"
import Svg, { Path } from "react-native-svg"


const ArrowBack = (props) => (
  <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
  </Svg>
)

export default ArrowBack