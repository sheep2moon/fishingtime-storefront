import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import { useStore } from "../../../../lib/context/store-context"
import { navLinks } from "../../../../lib/data/NavLinks"
import { useCustomNavCollections } from "../../../../lib/hooks/use-nav-collections"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { selectManyCollections } = useStore()
  const customCollections = useCustomNavCollections()

  return (
    <div className="content-container flex flex-col pt-4 pb-4 w-full px-2 border-t-2 border-emerald-900/20">
      <ul className="flex flex-col items-center justify-center py-2 gap-2 text-slate-600 ">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.href}>
              <a>{link.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <span className="text-xsmall-regular text-gray-500 text-center">
        © Copyright 2022 Fishing Time
      </span>
    </div>
  )
}

export default FooterNav
