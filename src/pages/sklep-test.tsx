import React from "react"
import {
  InstantSearch,
  RefinementList,
  SortBy,
} from "react-instantsearch-hooks-web"
import { searchClient, SEARCH_INDEX_NAME } from "../lib/search-client"

const StoreMeili = () => {
  return (
    <div>
      <h1>Test z filtrami</h1>
      <InstantSearch indexName="products" searchClient={searchClient}>
        {/* <RefinementList attribute="variants.prices.amount" /> */}
        <SortBy
          items={[
            {
              value: "products:variants.prices.amount:asc",
              label: "Od najtańszych",
            },
            {
              value: "products:variants.prices.amount:desc",
              label: "Od najdroższych",
            },
          ]}
        />
      </InstantSearch>
    </div>
  )
}

export default StoreMeili
