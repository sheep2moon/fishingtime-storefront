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
import { useRouter } from "next/router"

const CategorySelector = () => {
  const categoriesData: { [key: string]: customCollection } =
    useCustomNavCollections()
  const [expanded, setExpanded] = useState("")
  const [isSelectedAll, setIsSelectedAll] = useState(false)
  const router = useRouter()

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

  useEffect(() => {
    if (router.query.kategoria && !router.query.podkategoria) {
      if (router.query.kategoria === "all") {
        clear.refine()
      } else {
        handleSelectMainCategory(router.query.kategoria as string)
      }
    } else if (router.query.kategoria && router.query.podkategoria) {
      clear.refine()
      mainCategory.refine(router.query.kategoria as string)
      handleSelectSubcategory(router.query.podkategoria as string)
    }
    router.push({ query: {} })
  }, [router.asPath])

  // const handleExpand = (itemKey: string) => {
  //   setExpanded(itemKey)
  // }

  useEffect(() => {
    const currentlyRefined = mainCategory.items.find((c) => c.isRefined)
    if (currentlyRefined) setExpanded(currentlyRefined.value)
    else setExpanded("")
  }, [mainCategory.items])

  const handleSelectMainCategory = (itemKey: string) => {
    // handleExpand(expanded === itemKey ? "" : itemKey)
    clear.refine()
    setIsSelectedAll(true)
    mainCategory.refine(itemKey)
  }
  const handleSelectSubcategory = (subCategoryName: string) => {
    subCategory.refine(subCategoryName)
    setIsSelectedAll(false)
  }

  const handleSelectAll = () => {
    setIsSelectedAll(true)
    const i = subCategory.items.find((item) => item.isRefined)
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
