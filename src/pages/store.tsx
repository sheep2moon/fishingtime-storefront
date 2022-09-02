import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { NextPageWithLayout } from "types/global"

const Store: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Sklep" description="Zobacz asortyment naszego sklepu." />
      <div className="flex flex-col small:flex-row py-6 items-start">
        <RefinementList />
        <InfiniteProducts />
      </div>
    </>
  )
}

Store.getLayout = (page) => <Layout>{page}</Layout>

export default Store
