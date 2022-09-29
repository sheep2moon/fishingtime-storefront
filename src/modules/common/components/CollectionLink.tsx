import Link from "next/link"
import React from "react"
import { BiChevronDown } from "react-icons/bi"

type CollectionButtonProps = {
  title: string
  href: string
  icon?: JSX.Element
  onClick?: () => void
}

const CollectionLink = ({
  title,
  icon,
  href,
  onClick,
}: CollectionButtonProps) => {
  return (
    <Link href={href} passHref>
      <a
        className="flex items-center justify-start  p-2 text-lg w-80 bg-slate-50 hover:bg-amber-100 text-emerald-900 border-b"
        onClick={onClick}
      >
        {icon ?? icon}
        <p className="ml-2">{title}</p>
        <BiChevronDown className="-rotate-90 ml-auto" />
      </a>
    </Link>
  )
}

export default CollectionLink
