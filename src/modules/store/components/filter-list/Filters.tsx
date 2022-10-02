import React from "react"

import CategorySelector from "../category-selector"
import RefinementList from "../refinement-list"
import CurrentFilters from "./CurrentFilters"

const Filters = () => {
  return (
    <div className="flex flex-col">
      <CategorySelector />

      <RefinementList
        attribute="hs_code"
        title="Producent"
        operator="or"
        handle=""
      />
      <CurrentFilters />
    </div>
  )
}

export default Filters
