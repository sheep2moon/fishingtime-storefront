import { Configure, InstantSearch } from "react-instantsearch-hooks-web"
import { searchClient } from "../../lib/search-client"
import Head from "../../modules/common/components/head"
import Layout from "../../modules/layout/templates"
import { InfiniteProductHits } from "../../modules/store/components/products-list"
import { simple } from "instantsearch.js/es/lib/stateMappings"
import { history } from "instantsearch.js/es/lib/routers"
import SortSelector from "../../modules/store/components/sort-selector"
import { NextPageWithLayout } from "../../types/global"
import SearchBox from "../../modules/search/components/search-box"
import FilterList from "../../modules/store/components/filter-list"

const CategoryStore: NextPageWithLayout = () => {
  // const routing = {
  //   stateMapping: simple(),
  //   router: history({
  //     getLocation() {
  //       if (typeof window === "undefined") {
  //         return location
  //       }

  //       return window.location
  //     },
  //   }),
  // }

  return (
    <>
      <Head title="Sklep" description="Zobacz asortyment naszego sklepu." />
      <InstantSearch
        indexName="products"
        searchClient={searchClient}
        // onStateChange={handleStateChange}
        // routing={routing}
        // stalledSearchDelay={200}
      >
        <Configure filters={"status=published"} />

        <div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col small:flex-row gap-1 pb-6 w-full items-start small:justify-center content-container mt-2">
              {/* <DesktopFilters /> */}
              <FilterList />
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
