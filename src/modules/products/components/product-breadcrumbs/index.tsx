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
      {/* {collection.metadata?.parent && (
        <>
          <Link href={`/sklep?kategoria=${collection.metadata.parent}`}>
            <a classNameName="text-small-regular text-gray-700">
              {navCollections[collection.metadata.parent as string].title}
            </a>
          </Link>
          <span>{">"}</span>
        </>
      )}
      <Link
        href={`/sklep?kategoria=${collection.metadata.parent}&podkategoria=${collection.title}`}
      >
        <a classNameName="text-small-regular text-gray-700">{collection.title}</a>
      </Link> */}
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="flex items-center gap-1 text-sm text-gray-600"
        >
          <li>
            <a href="#" className="block transition hover:text-gray-700">
              <span className="sr-only"> Wszystkie produkty </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>

          {collection.metadata?.parent && (
            <>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <Link href={`/sklep?kategoria=${collection.metadata.parent}`}>
                <a className="text-regular block transition hover:text-gray-500">
                  {navCollections[collection.metadata.parent as string].title}
                </a>
              </Link>
            </>
          )}

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <Link
            href={`/sklep?kategoria=${collection.metadata.parent}&podkategoria=${collection.handle}`}
          >
            <a className="text-regular text-gray-700">{collection.title}</a>
          </Link>
        </ol>
      </nav>
    </div>
  )
}

export default ProductBreadcrumbs
