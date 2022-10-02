import clsx from "clsx"
import React, { useCallback } from "react"
import {
  useMenu,
  UseMenuProps,
  useClearRefinements,
} from "react-instantsearch-hooks"
import { navCollections } from "../../../../lib/data/navCollections"
import ChevronDown from "../../../common/icons/chevron-down"
import PanelTitle from "../filter-list/PanelTitle"

export type MenuProps = React.ComponentProps<"div"> & UseMenuProps

const CategoryMenu = (props: MenuProps) => {
  const {
    canToggleShowMore,
    isShowingMore,
    items,
    refine,
    createURL,
    toggleShowMore,
  } = useMenu({ ...props, sortBy: ["name:asc"] })

  const clear = useClearRefinements()

  const handleCategorySelect = (itemName: string) => {
    clear.refine()
    console.log("wa")

    refine(itemName)
  }

  return (
    <div>
      <PanelTitle>Kategorie</PanelTitle>
      <div className="p-2">
        <ul className="">
          {items.map((item) => (
            <li key={item.value} className="p-1">
              <a
                className="flex justify-between"
                onClick={(e) => {
                  e.preventDefault()
                  handleCategorySelect(item.value)
                }}
                href={createURL(item.value)}
              >
                <span
                  className={clsx("flex items-center", {
                    "font-bold": item.isRefined,
                  })}
                >
                  <span
                    className={clsx("", {
                      "block ": item.isRefined,
                      hidden: !item.isRefined,
                    })}
                  >
                    <ChevronDown className="-rotate-90" />
                  </span>
                  {navCollections[item.label].title}
                </span>
                {/* <span className="ais-Menu-count">{item.count}</span> */}
              </a>
            </li>
          ))}
        </ul>

        {props.showMore && canToggleShowMore && (
          <button
            className="mx-auto w-full bg-slate-200"
            disabled={!canToggleShowMore}
            onClick={toggleShowMore}
          >
            {isShowingMore ? "Zwiń" : "Rozwiń"}
          </button>
        )}
      </div>
    </div>
  )
}

export default CategoryMenu
