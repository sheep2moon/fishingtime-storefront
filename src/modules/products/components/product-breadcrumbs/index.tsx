import { ProductCollection } from "@medusajs/medusa"
import Link from "next/link"
import React, { useMemo } from "react"
import { navCollections } from "../../../../lib/data/navCollections"

const ProductBreadcrumbs = ({
  collection,
}: {
  collection: ProductCollection
}) => {
  const mainCollection: { handle: string; title: string } = useMemo(() => {
    const p = collection.metadata.parent
    if (typeof p === "string" && p in navCollections) {
      return { handle: p, title: navCollections[p].title }
    } else {
      return { handle: "pozostale", title: navCollections["pozostale"].title }
    }
  }, [collection])

  const subCollection = "" //TODO

  return (
    <div>
      <Link href={`/sklep/${mainCollection.handle}`}>
        <a className="text-small-regular text-gray-700">
          {mainCollection.title}
        </a>
      </Link>
      <span>{">"}</span>
      <Link href={`/sklep/${collection.metadata.parent}`}>
        <a className="text-small-regular text-gray-700">{collection.title}</a>
      </Link>
    </div>
  )
}

export default ProductBreadcrumbs
