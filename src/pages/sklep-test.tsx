import React from "react"
import {
  DynamicWidgets,
  Hits,
  InstantSearch,
  Pagination,
  RangeInput,
  RefinementList,
  SortBy,
} from "react-instantsearch-hooks-web"
import { searchClient, SEARCH_INDEX_NAME } from "../lib/search-client"
import Head from "../modules/common/components/head"
import Layout from "../modules/layout/templates"
import PriceSlider from "../modules/store/components/filter-list/PriceSlider"
import { NumericMenu } from "../modules/store/components/numeric-menu"
import ProductHitPreview from "../modules/store/components/product-hit-preview"
import { InfiniteProductHits } from "../modules/store/components/products-list"
import { NextPageWithLayout } from "../types/global"

const StoreMeili: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Sklep" description="Zobacz asortyment naszego sklepu." />
      <InstantSearch indexName="products" searchClient={searchClient}>
        <div className="flex flex-col small:flex-row gap-1 py-6 w-full items-start small:justify-center content-container">
          <div className="flex flex-col p-2 gap-4 w-full small:max-w-sm bg-slate-100 shadow-lg rounded-md">
            <div>
              <span className="bg-emerald-900 w-full block p-1 text-slate-50 text-lg mb-4">
                Sortuj
              </span>
              <SortBy
                className="p-2"
                items={[
                  {
                    value: "products:updated_at:asc",
                    label: "Ostatnio modyfikowane rosnąco ",
                  },
                  {
                    value: "products:updated_at:desc",
                    label: "Ostatnio modyfikowane malejąco",
                  },
                  {
                    value: "products:variants.prices.amount:asc",
                    label: "Cena rosnąco",
                  },
                  {
                    value: "products:variants.prices.amount:desc",
                    label: "Cena malejąco",
                  },
                  {
                    value: "products:variants.inventory_quantity:asc",
                    label: "Dostępność rosnąco",
                  },
                  {
                    value: "products:variants.inventory_quantity:desc",
                    label: "Dostępność malejąco",
                  },
                ]}
              />
            </div>

            <div>
              <span className="bg-emerald-900 w-full block p-1 text-slate-50 text-lg mb-4">
                Cena
              </span>

              <PriceSlider attribute="variants.prices.amount" label="Cena" />
            </div>

            <div>
              <span className="bg-emerald-900 w-full block p-1 text-slate-50 text-lg mb-4">
                Kategorie
              </span>
              <RefinementList attribute="collection.title" showMore={true} />
            </div>
          </div>
          <div className="w-full flex flex-col ">
            <InfiniteProductHits />
          </div>
        </div>
      </InstantSearch>
    </>
  )
}

export default StoreMeili

StoreMeili.getLayout = (page) => <Layout>{page}</Layout>
