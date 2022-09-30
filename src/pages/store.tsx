import React from "react"
import {
  InstantSearch,
  CurrentRefinements,
} from "react-instantsearch-hooks-web"
import { searchClient, SEARCH_INDEX_NAME } from "../lib/search-client"
import { history } from "instantsearch.js/es/lib/routers"
import Head from "../modules/common/components/head"
import Layout from "../modules/layout/templates"
import PriceSlider from "../modules/store/components/desktop-filter-list/PriceSlider"
import { InfiniteProductHits } from "../modules/store/components/products-list"
import RefinementList from "../modules/store/components/refinement-list"
import SortSelector from "../modules/store/components/sort-selector"
import { NextPageWithLayout } from "../types/global"

const StoreMeili: NextPageWithLayout = () => {
  const indexName = "products"
  const routing = {
    router: history(),
    stateMapping: {
      stateToRoute(uiState: any) {
        const indexUiState = uiState[indexName]
        return {
          q: indexUiState.query,
          categories: indexUiState.menu?.categories,
          "collection.title": indexUiState.refinementList?.["collection.title"],
        }
      },
      routeToState(routeState: any) {
        return {
          [indexName]: {
            query: routeState.q,
            menu: {
              categories: routeState.categories,
            },
            refinementList: {
              "collection.title": routeState["collection.title"],
            },
            page: routeState.page,
          },
        }
      },
    },
  }

  return (
    <>
      <Head title="Sklep" description="Zobacz asortyment naszego sklepu." />
      <InstantSearch
        indexName="products"
        searchClient={searchClient}
        routing={routing}
      >
        {/* <Configure facets={["collection.title"]} /> */}
        <div className="flex flex-col small:flex-row gap-1 py-6 w-full items-start small:justify-center content-container">
          <div className="flex flex-col p-2 gap-4 w-full small:max-w-sm bg-slate-100 shadow-lg rounded-md">
            {/* <DynamicWidgets fallbackComponent={FallbackComponent} /> */}
            <CurrentRefinements />
            <RefinementList
              attribute="collection.title"
              showMore={true}
              operator="or"
            />
            <RefinementList
              attribute="hs_code"
              showMore={true}
              title="Producent"
              operator="or"
            />
            <RefinementList
              attribute="collection.metadata.parent"
              showMore={true}
              title="Główne kategorie (do testów)"
              operator="or"
            />

            <div>
              <span className="bg-emerald-900 w-full block p-1 text-slate-50 text-lg mb-4">
                Cena
              </span>

              <PriceSlider attribute="variants.prices.amount" label="Cena" />
            </div>
          </div>
          <div className="w-full flex flex-col ">
            <SortSelector />
            <InfiniteProductHits />
          </div>
        </div>
      </InstantSearch>
    </>
  )
}

export default StoreMeili

StoreMeili.getLayout = (page) => <Layout>{page}</Layout>

const url =
  "http://localhost:8000/sklep-test?products%5BrefinementList%5D%5Bcollection.title%5D%5B0%5D=Sp%C5%82awiki&products%5Brange%5D%5Bvariants.prices.amount%5D=100%3A80000"
const url2 =
  "http://localhost:8000/sklep-test?products%5BrefinementList%5D%5Bcollection.title%5D%5B0%5D=Sp%C5%82awiki&products%5BrefinementList%5D%5Bcollection.title%5D%5B1%5D=Akcesoria&products%5Brange%5D%5Bvariants.prices.amount%5D=100%3A80000"
