import React from "react"
import {
  DynamicWidgets,
  Hits,
  InstantSearch,
  RangeInput,
  RefinementList,
  SortBy,
} from "react-instantsearch-hooks-web"
import { searchClient, SEARCH_INDEX_NAME } from "../lib/search-client"
import Head from "../modules/common/components/head"
import Layout from "../modules/layout/templates"
import { NumericMenu } from "../modules/store/components/numeric-menu"
import ProductHitPreview from "../modules/store/components/product-hit-preview"
import { NextPageWithLayout } from "../types/global"

const StoreMeili: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Sklep" description="Zobacz asortyment naszego sklepu." />
      <InstantSearch indexName="products" searchClient={searchClient}>
        <div className="flex flex-col small:flex-row gap-1 py-6 w-full items-start small:justify-center content-container">
          <div className="flex flex-col p-2 gap-4">
            <div>
              <span className="bg-emerald-900 w-full block p-1 text-slate-50 text-lg">
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
            <h1>Test z filtrami</h1>
            <RefinementList attribute="collection.title" showMore={true} />

            <div>
              <span className="bg-emerald-900 w-full block p-1 text-slate-50 text-lg">
                Cena
              </span>
              <NumericMenu
                attribute="variants.prices.amount"
                items={[
                  {
                    label: "Mniej niż 5ł",
                    end: 500,
                  },
                  {
                    label: "Od 5zł do 15zł",
                    start: 500,
                    end: 1500,
                  },
                  {
                    label: "Od 15zł do 30zł",
                    start: 1500,
                    end: 3000,
                  },
                ]}
              />
            </div>
          </div>
          <div className="w-full flex ">
            <Hits
              className="flex preview-hits-list"
              hitComponent={ProductHitPreview}
            />
          </div>
        </div>
      </InstantSearch>
    </>
  )
}

export default StoreMeili

StoreMeili.getLayout = (page) => <Layout>{page}</Layout>
