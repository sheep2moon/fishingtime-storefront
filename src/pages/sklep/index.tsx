import {
  Configure,
  InstantSearch,
  InstantSearchProps,
  useInstantSearch,
} from "react-instantsearch-hooks-web"
import type { UiState } from "instantsearch.js"
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
import { useRouter } from "next/router"
import {
  searchStateToUrl,
  urlToSearchState,
} from "../../lib/util/searchstate-url"
import { GetServerSidePropsContext } from "next"
import { useEffect, useRef, useState } from "react"

// {
//   query,
// }

const CategoryStore: NextPageWithLayout<GetServerSidePropsContext> = () => {
  const router = useRouter()

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

  // const initialUiState = urlToSearchState(query)
  const setStateId: { current: NodeJS.Timeout | null } = useRef(null)

  const onStateChange: InstantSearchProps["onStateChange"] = ({
    uiState,
    setUiState,
  }) => {
    console.log("stateChange")

    clearTimeout(setStateId.current as NodeJS.Timeout)
    let q = ""
    if (
      router.query.kategoria &&
      router.query.kategoria !==
        uiState.products.menu?.["collection.metadata.parent"]
    ) {
      setUiState({
        products: {
          ...uiState,
          menu: { ...uiState.products.menu, ["collection.handle"]: "" },
        },
      })
      q = searchStateToUrl(uiState, true)
    } else {
      q = searchStateToUrl(uiState, false)
      setUiState(uiState)
    }

    setStateId.current = setTimeout(() => {
      router.push({ query: q }, undefined, { shallow: true }).then(() => {})
    }, 700)
  }

  return (
    <>
      <Head title="Sklep" description="Zobacz asortyment naszego sklepu." />
      <InstantSearch
        indexName="products"
        searchClient={searchClient}
        onStateChange={onStateChange}
        // initialUiState={initialUiState}
        // routing={routing}
        // stalledSearchDelay={200}
      >
        <Configure filters={"status=published"} />
        <UpdateUiState />
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

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const q = context.query

//   return {
//     props: { query: context.query }, // will be passed to the page component as props
//   }
// }

const UpdateUiState = () => {
  const { setUiState, uiState } = useInstantSearch()
  const router = useRouter()

  useEffect(() => {
    const q = searchStateToUrl(uiState, false)
    if (q !== router.asPath.split("?")[1]) {
      const newState = urlToSearchState(router.query)
      setUiState(newState)
    }
  }, [router.asPath])

  return <></>
}
