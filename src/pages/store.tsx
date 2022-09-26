import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { NextPageWithLayout } from "types/global"
import FilterList from "../modules/store/components/filter-list"

const Store: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Sklep" description="Zobacz asortyment naszego sklepu." />
      <div className="flex flex-col small:flex-row gap-1 py-6 w-full items-start small:justify-center content-container">
        <FilterList />
        <InfiniteProducts />
      </div>
    </>
  )
}

Store.getLayout = (page) => <Layout>{page}</Layout>

export default Store
