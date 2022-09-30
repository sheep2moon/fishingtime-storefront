import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Configure, InstantSearch } from "react-instantsearch-hooks-web"
import { searchClient } from "../../lib/search-client"
import Head from "../../modules/common/components/head"
import Layout from "../../modules/layout/templates"
import { InfiniteProductHits } from "../../modules/store/components/products-list"
import SortSelector from "../../modules/store/components/sort-selector"
import { NextPageWithLayout } from "../../types/global"
import SearchBox from "../../modules/search/components/search-box"
import { navCollections } from "../../lib/data/navCollections"
import FilterList from "../../modules/store/components/desktop-filter-list"
import Button from "../../modules/common/components/button"
import clsx from "clsx"
import ClearFilters from "../../modules/store/components/desktop-filter-list/ClearFilters"

const CategoryStore: NextPageWithLayout = () => {
  const { query, isFallback, replace } = useRouter()
  const [searchFilters, setSearchFilters] = useState("")
  const [filtersOpened, setFiltersOpened] = useState(false)

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
        <div>
          {filtersOpened && (
            <MobileFilters close={() => setFiltersOpened(false)} />
          )}
          {!filtersOpened && (
            <div className="fixed bottom-2 left-2 z-50 small:hidden">
              <Button onClick={() => setFiltersOpened(true)}>Filtruj</Button>
            </div>
          )}
          <div
            className={clsx("flex flex-col items-center ", {
              "overflow-y-hidden fixed": filtersOpened,
            })}
          >
            {query.handle && query.handle !== "all" && (
              <h2 className="my-2 text-lg font-bold border-b-2 border-emerald-900">
                {navCollections[query.handle as string].title}
              </h2>
            )}
            <div className="flex flex-col small:flex-row gap-1 pb-6 w-full items-start small:justify-center content-container mt-2">
              <DesktopFilters />

              <div className="w-full flex flex-col bg-slate-50 px-1">
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
        </div>
      </InstantSearch>
    </>
  )
}

export default CategoryStore

CategoryStore.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

const DesktopFilters = () => {
  return (
    <div className="hidden small:block w-full small:max-w-xs">
      <FilterList />
    </div>
  )
}

const MobileFilters = ({ close }: { close: () => void }) => {
  return (
    <div className="fixed z-50 bg-slate-50 bottom-0 top-16 flex flex-col transition-all w-full small:max-w-xs overflow-y-scroll pb-16">
      <FilterList />
      <div className="grid grid-cols-2 fixed bottom-0 left-0 right-0 border-t border-gray-400">
        <ClearFilters />
        <Button variant="primary" onClick={close}>
          Filtruj
        </Button>
      </div>
    </div>
  )
}
