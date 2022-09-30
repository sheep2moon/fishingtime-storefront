import React from "react"
import { RangeInput } from "react-instantsearch-hooks-web"
import RefinementList from "../refinement-list"
import CurrentFilters from "./CurrentFilters"
import PriceSlider from "./PriceSlider"

const FilterList = () => {
  return (
    <div className="flex flex-col">
      <CurrentFilters />

      <RefinementList
        attribute="collection.title"
        showMore={true}
        title="Podkategorie"
        operator="or"
        handle="kolekcja"
      />
      <RefinementList
        attribute="hs_code"
        showMore={true}
        title="Producent"
        operator="or"
        handle=""
      />
      {/* <PriceSlider attribute="variants.prices.amount" label="Cena" /> */}
    </div>
  )
}

export default FilterList
