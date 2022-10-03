import { ProductCollection } from "@medusajs/medusa"
import Link from "next/link"
import React, { useMemo } from "react"
import { navCollections } from "../../../../lib/data/navCollections"

const ProductBreadcrumbs = ({
  collection,
}: {
  collection: ProductCollection
}) => {
  return (
    <div>
      {collection.metadata?.parent && (
        <>
          <Link href={`/sklep?kategoria=${collection.metadata.parent}`}>
            <a className="text-small-regular text-gray-700">
              {navCollections[collection.metadata.parent as string].title}
            </a>
          </Link>
          <span>{">"}</span>
        </>
      )}
      <Link
        href={`/sklep?kategoria=${collection.metadata.parent}&podkategoria=${collection.title}`}
      >
        <a className="text-small-regular text-gray-700">{collection.title}</a>
      </Link>
    </div>
  )
}

export default ProductBreadcrumbs
