import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import FeaturedCategories from "../modules/home/components/featured-categories"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Strona Główna"
        description="Wkrótce otwarcie sklepu internetowego."
      />
      <Hero />
      {/* <FeaturedCategories /> */}
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
