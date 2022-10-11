import { ParsedUrlQuery } from "querystring"
import type { UiState } from "instantsearch.js"
import qs from "querystring"

export const searchStateToUrl = (
  state: UiState,
  clearSubcategories: boolean
) => {
  let q: string[] = []
  console.log(state.products)

  if (state.products) {
    if (state.products.menu) {
      if (state.products.menu["collection.metadata.parent"]) {
        //HANDLE MAIN CATEGORY
        q.push("kategoria=" + state.products.menu["collection.metadata.parent"])
      }
      if (state.products.menu["collection.handle"] && !clearSubcategories) {
        //HANDLE SUBCATEGORY
        q.push("podkategoria=" + state.products.menu["collection.handle"])
      }
    }
    if (state.products.refinementList?.hs_code) {
      //HANDLE REFINEMENTS
      q.push("producent=" + state.products.refinementList?.hs_code.join("+"))
    }
    if (state.products.sortBy) {
      //HANDLE sortBy
      q.push("sortuj=" + state.products.sortBy)
    }
    if (state.products.page) {
      q.push("page=" + state.products.page)
    }
    // if (state.products.refinementList){
    //   Object.keys(state.products.refinementList).forEach(refinement => {
    //     q.push(`refinement=${refinement.j}`)
    //   })
    // }
  }
  return q.join("&")
}

export const urlToSearchState = (q: ParsedUrlQuery) => {
  let uiState: {
    configure: { filters: string }
    menu: { [key: string]: string }
    refinementList: { [key: string]: string[] }
    sortBy?: string
    page?: number
  } = {
    configure: { filters: "status=published" },
    menu: {},
    refinementList: {},
  }
  // let uiState: UiState = {products:{}}
  if (q.kategoria) {
    uiState.menu["collection.metadata.parent"] = q.kategoria as string
  }
  if (q.podkategoria) {
    uiState.menu["collection.handle"] = q.podkategoria as string
  }
  if (q.sortuj) {
    uiState.sortBy = q.sortuj as string
  }
  if (q.page) {
    uiState.page = parseInt(q.page as string)
  }
  if (q.producent) {
    if (typeof q.producent === "string") {
      uiState.refinementList["hs_code"] = q.producent.split("+")
    }
  }

  return { products: { ...uiState } }
}
