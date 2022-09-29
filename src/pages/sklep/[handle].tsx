import { useMemo, useState, useEffect } from "react"
import { useRouter } from "next/router"
import {
  Configure,
  InstantSearch,
  useClearRefinements,
} from "react-instantsearch-hooks-web"
import { searchClient } from "../../lib/search-client"
import Head from "../../modules/common/components/head"
import Layout from "../../modules/layout/templates"
import PriceSlider from "../../modules/store/components/filter-list/PriceSlider"
import { InfiniteProductHits } from "../../modules/store/components/products-list"
import RefinementList from "../../modules/store/components/refinement-list"
import SortSelector from "../../modules/store/components/sort-selector"
import { NextPageWithLayout } from "../../types/global"
import SearchBox from "../../modules/search/components/search-box"
import CurrentFilters from "../../modules/store/components/filter-list/CurrentFilters"
import { handleToTitle } from "../../lib/util/transform-titles-links"
import { navCollections } from "../../lib/data/navCollections"

const CategoryStore: NextPageWithLayout = () => {
  const { query, isFallback, replace } = useRouter()
  const [searchFilters, setSearchFilters] = useState("")

  useEffect(() => {
    if (query.handle === "all" || query.handle === "pozostale")
      setSearchFilters("")
    else setSearchFilters(`collection.metadata.parent=${query.handle}`)
  }, [query])

  if (isFallback) return <div>SKELETON TODO</div>
  return (
    <>
      <Head title="Sklep" description="Zobacz asortyment naszego sklepu." />
      <InstantSearch indexName="products" searchClient={searchClient}>
        <Configure filters={searchFilters} facets={["*"]} />
        <div className="flex flex-col items-center">
          {query.handle && (
            <h2 className="my-2 text-lg font-bold border-b-2 border-emerald-900">
              {navCollections[query.handle as string].title}
            </h2>
          )}
          <div className="flex flex-col small:flex-row gap-1 pb-6 w-full items-start small:justify-center content-container">
            <div className="flex flex-col p-2 gap-4 w-full small:max-w-xs border border-slate-200 rounded-md">
              <CurrentFilters />

              <RefinementList
                attribute="hs_code"
                showMore={true}
                title="Producent"
                operator="or"
                handle=""
              />
              <RefinementList
                attribute="collection.title"
                showMore={true}
                title="Podkategorie"
                operator="or"
                handle="kolekcja"
              />
              {/* <RefinementList
              attribute="tags.value"
              showMore={true}
              title="Tagi"
              operator="or"
            /> */}

              <PriceSlider attribute="variants.prices.amount" label="Cena" />
            </div>
            <div className="w-full flex flex-col bg-slate-50 p-1">
              <div className="flex ">
                <div className="bg-slate-50 w-full border border-slate-300">
                  <SearchBox />
                </div>
                <SortSelector />
              </div>
              <InfiniteProductHits />
            </div>
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
