import React from "react"
import { customCollections } from "../../../../lib/hooks/use-nav-collections"
import { ChangeEvent, useState } from "react"
import { StoreGetProductsParams } from "@medusajs/medusa"
import ChevronDown from "../../../common/icons/chevron-down"
import clsx from "clsx"
import { useStore } from "../../../../lib/context/store-context"

type SectionsProps = {
  section: customCollections
}

const ListSection = ({ section }: SectionsProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  const { params, updateParams } = useStore()
  return (
    <div className="flex flex-col" key={`side-collections${section.title}`}>
      <span
        className="my-2 pl-1 shadow-sm border-l-2 border-primary flex justify-between"
        onClick={toggleOpen}
      >
        {section.title}
        <ChevronDown className={clsx({ "rotate-180": isOpen })} />
      </span>
      {isOpen && (
        <ul className="flex flex-col pl-2">
          {section.collections.map((collection) => (
            <li key={collection.id}>
              <label className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  defaultChecked={params.collection_id?.includes(collection.id)}
                  onChange={() => updateParams(collection.id)}
                  className="accent-amber-200"
                />
                {collection.title}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListSection
