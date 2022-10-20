import React from "react"
import { IconProps } from "types/icon"

const FishingBox: React.FC<IconProps> = ({
  size = "20",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 203 177"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    ></svg>
  )
}

export default FishingBox
3
