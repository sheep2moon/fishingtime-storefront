import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import Link from "next/link"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const NotFound: NextPageWithLayout = () => {
  return (
    <>
      <Head title="404" description="Coś poszło nie tak" />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-2xl-semi text-gry-900">Strona nie istnieje</h1>
        <p className="text-small-regular text-gray-700">
          Strona do której chcesz przejść nie została jeszcze zaimplementowana.
        </p>
        <Link href="/">
          <a className="mt-4 underline text-base-regular text-gray-900">
            Idź do strony głównej
          </a>
        </Link>
      </div>
    </>
  )
}

NotFound.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default NotFound
