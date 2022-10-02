import clsx from "clsx"
import React, { useEffect, useState, useCallback } from "react"
import {
  useClearRefinements,
  useMenu,
  useRefinementList,
} from "react-instantsearch-hooks-web"
import {
  customCollection,
  navCollections,
} from "../../../../lib/data/navCollections"
import { useCustomNavCollections } from "../../../../lib/hooks/use-nav-collections"
import ChevronDown from "../../../common/icons/chevron-down"
import PanelTitle from "../filter-list/PanelTitle"
import { VscDebugStackframeDot } from "react-icons/vsc"
import Checkbox from "../../../common/components/checkbox"

const CategorySelector = () => {
  const categoriesData: { [key: string]: customCollection } =
    useCustomNavCollections()
  const [expanded, setExpanded] = useState("")
  const [isSelectedAll, setIsSelectedAll] = useState(false)

  const mainCategory = useMenu({
    attribute: "collection.metadata.parent",
    sortBy: ["name:asc"],
  })
  const subCategory = useMenu({
    attribute: "collection.title",
    sortBy: ["name:asc"],
    limit: 999,
  })
  const clear = useClearRefinements()

  const handleExpand = (itemKey: string) => {
    setExpanded(itemKey)
  }

  const handleSelectMainCategory = (itemKey: string) => {
    handleExpand(expanded === itemKey ? "" : itemKey)
    clear.refine()
    setIsSelectedAll(true)
    mainCategory.refine(itemKey)
  }
  const handleSelectSubcategory = (itemName: string) => {
    subCategory.refine(itemName)
    setIsSelectedAll(false)
  }

  const handleSelectAll = () => {
    setIsSelectedAll(true)
    const i = subCategory.items.find((item) => item.isRefined)
    console.log(i)

    if (i) {
      subCategory.refine(i?.value)
    }
  }

  const isCollectionRefined = (itemKey: string) => {
    const i = subCategory.items.find((item) => item.value === itemKey)
    return i?.isRefined
  }

  return (
    <div>
      <PanelTitle>Kategorie</PanelTitle>
      {mainCategory.items.map((mainCategory) => (
        <div className="cursor-pointer py-1" key={mainCategory.value}>
          <div
            onClick={() => handleSelectMainCategory(mainCategory.value)}
            className={clsx(
              "flex justify-between items-center rounded-sm bg-slate-200 hover:bg-slate-300 p-1",
              {
                "font-bold": mainCategory.isRefined,
              }
            )}
          >
            <span>{navCollections[mainCategory.value].title}</span>
            <ChevronDown
              className={clsx({
                "rotate-180": mainCategory.value === expanded,
              })}
            />
          </div>
          {mainCategory.value === expanded && (
            <ul className="pl-2">
              <li onClick={() => handleSelectAll()}>
                <div
                  className={clsx("flex items-center", {
                    "text-amber-700 font-bold": isSelectedAll,
                  })}
                >
                  <VscDebugStackframeDot />
                  <span>Wszystko</span>
                </div>
              </li>
              {categoriesData[mainCategory.value].collections.map(
                (collection) => (
                  <li
                    key={collection.id}
                    className=""
                    onClick={() => handleSelectSubcategory(collection.title)}
                  >
                    <div
                      className={clsx("flex items-center", {
                        "text-amber-700 font-bold": isCollectionRefined(
                          collection.title
                        ),
                      })}
                    >
                      <VscDebugStackframeDot />
                      <span>{collection.title}</span>
                    </div>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default CategorySelector
