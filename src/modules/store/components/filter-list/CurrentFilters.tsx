import React, { useEffect, useMemo } from "react"
import { useCurrentRefinements } from "react-instantsearch-hooks-web"
import ClearFilters from "./ClearFilters"
import PanelTitle from "./PanelTitle"

const labelsMap: { [key: string]: string } = {
  "variants.prices.amount": "Cena",
  "collection.title": "Podkategoria",
  hs_code: "Producent",
}

const CurrentFilters = () => {
  const { items, canRefine, refine } = useCurrentRefinements()

  const filteredItems = useMemo(() => {
    return items.filter(
      (item) => item.attribute !== "collection.metadata.parent"
    )
  }, [items])

  return (
    <div>
      <PanelTitle>Aktywne Filtry</PanelTitle>
      <div className="flex flex-wrap gap-1 my-1 mx-2">
        {filteredItems.length === 0 && <span>Brak</span>}
        {filteredItems.map((item) => (
          <div
            key={item.attribute}
            className=" bg-slate-100 border border-slate-300 flex items-center rounded-md"
          >
            <span className=" p-1">
              {item.attribute in labelsMap
                ? labelsMap[item.attribute]
                : item.attribute}
            </span>
            <div className="h-full flex gap-1 p-1 flex-wrap">
              {item.refinements.map((filter, index) => {
                let label = filter.label
                if (
                  item.attribute === "variants.prices.amount" &&
                  typeof filter.value === "number"
                ) {
                  label = index ? "do " : "od "
                  label += (filter.value / 100).toString() + "zł"
                }
                return (
                  <span
                    className=" flex items-center bg-slate-200 rounded-md p-1"
                    key={filter.label}
                  >
                    <span className="">{label}</span>
                    <button
                      className="ml-2 w-4 h-4 rounded-full bg-slate-200 border border-slate-500/40 text-xs flex items-center justify-center"
                      onClick={() => refine(filter)}
                    >
                      X
                    </button>
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="hidden small:block">
        <ClearFilters />
      </div>
    </div>
  )
}

export default CurrentFilters
