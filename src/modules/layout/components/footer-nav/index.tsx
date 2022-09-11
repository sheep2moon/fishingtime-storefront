import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import { useStore } from "../../../../lib/context/store-context"
import { useCustomNavCollections } from "../../../../lib/hooks/use-nav-collections"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { selectManyCollections } = useStore()
  const customCollections = useCustomNavCollections()

  return (
    <div className="content-container px-0 flex flex-col pt-8 pb-8 w-full">
      <span className="text-xsmall-regular text-gray-500 text-center">
        © Copyright 2022 Fishing Time
      </span>
    </div>
  )
}

export default FooterNav
