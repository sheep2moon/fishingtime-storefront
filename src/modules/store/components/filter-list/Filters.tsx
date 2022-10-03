import { useRouter } from "next/router"
import React from "react"
import { useClearRefinements } from "react-instantsearch-hooks-web"

import CategorySelector from "../category-selector"
import RefinementList from "../refinement-list"
import ClearFilters from "./ClearFilters"
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
