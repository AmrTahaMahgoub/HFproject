import * as React from "react"
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg"

const Star = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
   
    {...props}
  >
    <Rect width={20} height={20} rx={4} fill="#F1F1F1" />
    <G clipPath="url(#a)">
      <Path
        d="M6.424 15.716a.214.214 0 0 1-.211-.25l.664-3.87-2.812-2.741a.215.215 0 0 1 .119-.367l3.886-.564 1.738-3.521a.214.214 0 0 1 .385 0l1.737 3.52 3.886.565a.215.215 0 0 1 .12.367l-2.813 2.74.664 3.87a.215.215 0 0 1-.312.227L10 13.865l-3.476 1.827a.217.217 0 0 1-.1.024ZM4.676 8.851l2.581 2.516c.05.049.074.12.062.19l-.61 3.552L9.9 13.432a.214.214 0 0 1 .2 0l3.19 1.677-.609-3.552a.215.215 0 0 1 .062-.19l2.58-2.516-3.566-.519a.215.215 0 0 1-.162-.117L10 4.983 8.405 8.215a.215.215 0 0 1-.162.118l-3.567.518Z"
        fill="#838396"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(4 4)" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default Star
