import * as React from "react"
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg"

const Type = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    
    {...props}
  >
    <Rect width={20} height={20} rx={4} fill="#F1F1F1" />
    <G clipPath="url(#a)">
      <Path
        d="M15 15.6v-1.036a.984.984 0 0 0 .6-.964c0-.551-.359-1-.8-1-.441 0-.8.449-.8 1a.984.984 0 0 0 .6.964V15.6h-1V9.4a.2.2 0 0 0-.11-.179L12 8.476V7.4a.2.2 0 0 0-.145-.192L9.2 6.449V4.2A.2.2 0 0 0 9 4H5a.2.2 0 0 0-.2.2v11.4H4v.4h12v-.4h-1Zm-6.2 0H5.2v-.4H7v-.4H5.2V14H7v-.4H5.2v-.8H7v-.4H5.2v-.8H7v-.4H5.2v-.8H7V10H5.2v-.8H7v-.4H5.2V8H7v-.4H5.2v-.8H7v-.4H5.2v-.8H7v-.4H5.2v-.8h3.6v11.2Zm2.8 0H9.2v-.4h1.4v-.4H9.2V14h1.4v-.4H9.2v-.8h1.4v-.4H9.2v-.8h1.4v-.4H9.2v-.8h1.4V10H9.2v-.8h1.4v-.4H9.2V8h1.4v-.4H9.2v-.735l2.4.686V15.6Zm1.6 0H12v-.4h.6v-.4H12V14h.6v-.4H12v-.8h.6v-.4H12v-.8h.6v-.4H12v-.8h.6V10H12V8.924l1.2.6V15.6Zm1.4-1.486a.7.7 0 0 1-.2-.514c0-.325.183-.6.4-.6.217 0 .4.275.4.6a.7.7 0 0 1-.2.514V13.8h-.4v.314Z"
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

export default Type
