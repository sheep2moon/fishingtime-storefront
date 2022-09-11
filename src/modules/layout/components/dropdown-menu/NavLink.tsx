import Link from "next/link"
import React from "react"

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.FC | string
}) => {
  return (
    <Link href={href} passHref>
      <a className="h-full flex items-center px-4 text-lg hover:bg-emerald-700">
        {children}
      </a>
    </Link>
  )
}

export default NavLink
