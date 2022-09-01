import React from "react"
import { BiChevronDown } from "react-icons/bi"

type CollectionButtonProps = {
  title: string
  icon: JSX.Element
}

const CollectionButton = ({ title, icon }: CollectionButtonProps) => {
  return (
    <div className="flex items-center text-lg justify-start">
      {icon}
      <p className="ml-2">{title}</p>
      <BiChevronDown />
    </div>
  )
}

export default CollectionButton
