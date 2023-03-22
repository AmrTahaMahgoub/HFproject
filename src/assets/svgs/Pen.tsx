import * as React from "react"
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg"

const Pen = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
  
    {...props}
  >
    <Rect width={20} height={20} rx={4} fill="#F1F1F1" />
    <G clipPath="url(#a)" fill="#838396">
      <Path d="M14.75 4h-3.171c-.602 0-1.167.234-1.592.659l-5.56 5.561c-.275.275-.427.64-.427 1.031 0 .389.152.754.426 1.029l3.294 3.293c.275.275.64.427 1.031.427.388 0 .754-.152 1.029-.427l5.561-5.56c.425-.425.659-.99.659-1.591V5.25C16 4.561 15.439 4 14.75 4Zm.75 4.422c0 .467-.182.907-.512 1.237L9.427 15.22a.98.98 0 0 1-1.353 0L4.78 11.926a.949.949 0 0 1-.28-.677c0-.255.1-.495.28-.676l5.561-5.56a1.74 1.74 0 0 1 1.238-.513h3.171a.75.75 0 0 1 .75.75v3.172Z" />
      <Path d="M13.25 5.5c-.689 0-1.25.561-1.25 1.25S12.561 8 13.25 8s1.25-.561 1.25-1.25-.561-1.25-1.25-1.25Zm0 2a.75.75 0 0 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(4 4)" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default Pen
