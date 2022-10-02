import { useRouter } from "next/router"
import React, { useEffect } from "react"
import {
  RangeInput,
  useCurrentRefinements,
} from "react-instantsearch-hooks-web"
import CategoryMenu from "../category-menu"
import CategorySelector from "../category-selector"
import RefinementList from "../refinement-list"
import SubcategoryList from "../subcategory-list"
import CurrentFilters from "./CurrentFilters"
import PriceSlider from "./PriceSlider"

const Filters = () => {
  return (
    <div className="flex flex-col">
      <CategorySelector />

      {/* <CategoryMenu
        attribute="collection.metadata.parent"
        showMore={true}
        title="Kategorie"
      />
      <SubcategoryList attribute="collection.title" title="Podkategorie" />
       */}
      <RefinementList
        attribute="hs_code"
        title="Producent"
        operator="or"
        handle=""
      />
      <CurrentFilters />
      {/* <PriceSlider attribute="variants.prices.amount" /> */}
    </div>
  )
}

export default Filters
