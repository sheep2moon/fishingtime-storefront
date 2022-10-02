import React from "react"

import Head from "../modules/common/components/head"
import Layout from "../modules/layout/templates"

import { NextPageWithLayout } from "../types/global"

const StoreMeili: NextPageWithLayout = () => {
  // const indexName = "products"

  // const routing = {
  //   router: history(),
  //   stateMapping: {
  //     stateToRoute(uiState: any) {
  //       const indexUiState = uiState[indexName]
  //       return {
  //         q: indexUiState.query,
  //         categories: indexUiState.menu?.categories,
  //         "collection.title": indexUiState.refinementList?.["collection.title"],
  //       }
  //     },
  //     routeToState(routeState: any) {
  //       return {
  //         [indexName]: {
  //           query: routeState.q,
  //           menu: {
  //             categories: routeState.categories,
  //           },
  //           refinementList: {
  //             "collection.title": routeState["collection.title"],
  //           },
  //           page: routeState.page,
  //         },
  //       }
  //     },
  //   },
  // }

  return (
    <>
      <Head title="Sklep" description="Zobacz asortyment naszego sklepu." />
      <div>
        <h1>przejdz do /sklep/all </h1>
      </div>
    </>
  )
}

export default StoreMeili

StoreMeili.getLayout = (page) => <Layout>{page}</Layout>

const url =
  "http://localhost:8000/sklep-test?products%5BrefinementList%5D%5Bcollection.title%5D%5B0%5D=Sp%C5%82awiki&products%5Brange%5D%5Bvariants.prices.amount%5D=100%3A80000"
const url2 =
  "http://localhost:8000/sklep-test?products%5BrefinementList%5D%5Bcollection.title%5D%5B0%5D=Sp%C5%82awiki&products%5BrefinementList%5D%5Bcollection.title%5D%5B1%5D=Akcesoria&products%5Brange%5D%5Bvariants.prices.amount%5D=100%3A80000"
