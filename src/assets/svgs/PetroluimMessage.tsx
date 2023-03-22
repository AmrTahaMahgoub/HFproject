import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

const PetroluimMessage = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
  
    {...props}
  >
    <Rect width={20} height={20} rx={6} fill="#205067" />
    <Path
      d="M12.083 13.854H7.916c-1.52 0-2.395-.875-2.395-2.395V8.542c0-1.521.875-2.396 2.395-2.396h4.167c1.52 0 2.396.875 2.396 2.396v2.917c0 1.52-.875 2.395-2.396 2.395ZM7.916 6.771c-1.191 0-1.77.58-1.77 1.77v2.918c0 1.191.579 1.77 1.77 1.77h4.167c1.192 0 1.77-.579 1.77-1.77V8.542c0-1.192-.578-1.771-1.77-1.771H7.916Z"
      fill="#fff"
    />
    <Path
      d="M10 10.363c-.35 0-.705-.109-.976-.33L7.72 8.992a.312.312 0 0 1 .388-.488l1.304 1.042c.317.254.854.254 1.17 0l1.305-1.042a.308.308 0 0 1 .438.05.308.308 0 0 1-.05.438l-1.305 1.041c-.266.221-.62.33-.97.33Z"
      fill="#fff"
    />
  </Svg>
)

export default PetroluimMessage
