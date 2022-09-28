import { useMemo } from "react"
import { useRouter } from "next/router"
import {
  Configure,
  CurrentRefinements,
  InstantSearch,
} from "react-instantsearch-hooks-web"
import { searchClient } from "../../lib/search-client"
import Head from "../../modules/common/components/head"
import Spinner from "../../modules/common/icons/spinner"
import Layout from "../../modules/layout/templates"
import PriceSlider from "../../modules/store/components/filter-list/PriceSlider"
import { InfiniteProductHits } from "../../modules/store/components/products-list"
import RefinementList from "../../modules/store/components/refinement-list"
import SortSelector from "../../modules/store/components/sort-selector"
import { NextPageWithLayout } from "../../types/global"
import { history } from "instantsearch.js/es/lib/routers"
import CategoryMenu from "../../modules/store/components/category-menu"
import {
  handleToTitle,
  titleToHandle,
} from "../../lib/util/transform-titles-links"

const CategoryStore: NextPageWithLayout = () => {
  const { query, isFallback, replace } = useRouter()
  if (isFallback) return <div>SKELETON TODO</div>
  //   if (!(query.handle instanceof String)) return <Spinner />

  const indexName = "products"
  // const routing = {
  //   router: history(),
  //   stateMapping: {
  //     stateToRoute(uiState: any) {
  //       const indexUiState = uiState[indexName]
  //       console.log(indexUiState)

  //       return {
  //         q: indexUiState.query,
  //         kolekcja: indexUiState.menu?.["collection.title"]
  //           ? titleToHandle(indexUiState.menu?.["collection.title"])
  //           : undefined,
  //       }
  //     },
  //     routeToState(routeState: any) {
  //       console.log(routeState)

  //       return {
  //         [indexName]: {
  //           query: routeState.q,
  //           menu: {
  //             "collection.title": routeState["kolekcja"]
  //               ? handleToTitle(routeState["kolekcja"])
  //               : undefined,
  //           },
  //         },
  //       }
  //     },
  //   },
  // }

  return (
    <>
      <Head title="Sklep" description="Zobacz asortyment naszego sklepu." />
      <InstantSearch
        indexName="products"
        searchClient={searchClient}
        routing={true}
      >
        <Configure
          filters={
            query.handle !== "all"
              ? `collection.metadata.parent=${query.handle}`
              : undefined
          }
          facets={["*"]}
        />
        <div className="flex flex-col small:flex-row gap-1 py-6 w-full items-start small:justify-center content-container">
          <div className="flex flex-col p-2 gap-4 w-full small:max-w-xs border border-slate-200 rounded-md">
            <CurrentRefinements />
            <CategoryMenu
              attribute="collection.title"
              showMore={true}
              sortBy={["count:desc"]}
            />

            <RefinementList
              attribute="hs_code"
              showMore={true}
              title="Producent"
              operator="or"
            />
            <RefinementList
              attribute="tags.value"
              showMore={true}
              title="Tagi"
              operator="or"
            />

            <PriceSlider attribute="variants.prices.amount" label="Cena" />
          </div>
          <div className="w-full flex flex-col bg-slate-50 p-1">
            <SortSelector />
            <InfiniteProductHits />
          </div>
        </div>
      </InstantSearch>
    </>
  )
}

export default CategoryStore

CategoryStore.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
