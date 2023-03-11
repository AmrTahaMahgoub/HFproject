import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const EyeSlashIcon = (props:SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
   
    {...props}
  >
    <Path
      d="M8 10.887a2.888 2.888 0 0 1 0-5.774 2.888 2.888 0 0 1 0 5.774Zm0-4.774A1.89 1.89 0 0 0 6.113 8 1.89 1.89 0 0 0 8 9.887 1.89 1.89 0 0 0 9.887 8 1.89 1.89 0 0 0 8 6.113Z"
      fill="#2E3439"
    />
    <Path
      d="M8 14.014c-2.506 0-4.873-1.467-6.5-4.014-.706-1.1-.706-2.893 0-4 1.634-2.547 4-4.013 6.5-4.013S12.867 3.453 14.493 6c.707 1.1.707 2.893 0 4C12.867 12.547 10.5 14.014 8 14.014ZM8 2.987c-2.153 0-4.213 1.293-5.653 3.553-.5.78-.5 2.14 0 2.92 1.44 2.26 3.5 3.553 5.653 3.553 2.153 0 4.213-1.293 5.653-3.553.5-.78.5-2.14 0-2.92-1.44-2.26-3.5-3.553-5.653-3.553Z"
      fill="#2E3439"
    />
  </Svg>
)

export default EyeSlashIcon