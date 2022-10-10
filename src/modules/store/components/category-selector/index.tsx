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
    attribute: "collection.handle",
    sortBy: ["name:asc"],
    limit: 999,
  })
  const clear = useClearRefinements()

  // useEffect(() => {
  //   console.log(router)
  //   if (router.query.goto) {
  //     if (router.query.kategoria && !router.query.podkategoria) {
  //       if (router.query.kategoria === "all") {
  //         clear.refine()
  //       } else {
  //         handleSelectMainCategory(router.query.kategoria as string)
  //       }
  //     } else if (router.query.kategoria && router.query.podkategoria) {
  //       clear.refine()
  //       mainCategory.refine(router.query.kategoria as string)
  //       handleSelectSubcategory(router.query.podkategoria as string)
  //     }
  //   }
  // router.push({ query: {} })
  // }, [router.asPath])

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
    // handleSelectAll()
    mainCategory.refine(itemKey)
    // subCategory.refine("")
  }
  const handleSelectSubcategory = (subCategoryHandle: string) => {
    subCategory.refine(subCategoryHandle)
    setIsSelectedAll(false)
  }

  const handleSelectAll = () => {
    // setIsSelectedAll(true)
    subCategory.refine("")
  }

  const isCollectionRefined = (itemKey: string) => {
    const i = subCategory.items.find((item) => item.value === itemKey)
    return i?.isRefined
  }

  useEffect(() => {
    const isSelectedAll = !subCategory.items.some((item) => item.isRefined)
    setIsSelectedAll(isSelectedAll)
  }, [subCategory.items])

  return (
    <div>
      <PanelTitle>Kategorie</PanelTitle>
      {mainCategory.items.map((mainCategory) => (
        <div className="cursor-pointer py-1" key={mainCategory.value}>
          <div
            onClick={() => handleSelectMainCategory(mainCategory.value)}
            className={clsx(
              "flex justify-between items-center rounded-sm hover:bg-slate-100 p-1",
              {
                "font-bold": mainCategory.isRefined,
              }
            )}
          >
            <span>{navCollections[mainCategory.value]?.title}</span>
            {/* <ChevronDown
              className={clsx({
                "rotate-180": mainCategory.value === expanded,
              })}
            /> */}
          </div>
          {mainCategory.value === expanded && (
            <div className="flex">
              <span className="ml-2 mb-[11px] w-[2px] max-h-fit bg-slate-400"></span>
              <ul className="">
                <li className="" onClick={() => handleSelectAll()}>
                  <div
                    className={clsx("flex items-center", {
                      "text-amber-700 font-bold": isSelectedAll,
                    })}
                  >
                    <span className="bg-slate-400 h-[2px] w-3 mr-2 rounded-r-md"></span>
                    <span>Wszystko</span>
                  </div>
                </li>
                {categoriesData[mainCategory.value].collections.map(
                  (collection) => (
                    <li
                      key={collection.id}
                      className=""
                      onClick={() => handleSelectSubcategory(collection.handle)}
                    >
                      <div
                        className={clsx("flex items-center", {
                          "text-amber-700 font-bold": isCollectionRefined(
                            collection.handle
                          ),
                        })}
                      >
                        <span className="bg-slate-400 h-[2px] w-3 mr-2 rounded-r-sm"></span>
                        <span>{collection.title}</span>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CategorySelector
