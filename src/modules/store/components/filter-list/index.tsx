import React from "react"
import {
  InstantSearch,
  RefinementList,
  SortBy,
} from "react-instantsearch-hooks-web"
import { searchClient, SEARCH_INDEX_NAME } from "../../../../lib/search-client"

const FilterList = () => {
  return (
    <div className="w-full max-w-sm bg-slate-100 p-4 px-2 rounded-md hidden small:block">
      <span className="px-2 mb-4 block font-bold border-b border-emerald-900">
        Filtry
      </span>

      <div className="bg-slate-50 shadow-md py-4 px-2 rounded-sm">lista</div>
    </div>
  )
}

export default FilterList
