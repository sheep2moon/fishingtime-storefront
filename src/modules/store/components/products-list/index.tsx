import repeat from "@lib/util/repeat"
import React, { useEffect, useRef } from "react"
import { useInfiniteHits } from "react-instantsearch-hooks-web"

import { ProductHit } from "../../../search/components/hit"
import SkeletonProductPreview from "../../../skeletons/components/skeleton-product-preview"
import ProductHitPreview from "../product-hit-preview"

type InfiniteHitsRes = {
  hits: any
  isLastPage: boolean
  showMore: () => void
  results?: any
}

export function InfiniteProductHits({}) {
  // const what: InfiniteHitsRes = useInfiniteHits()

  // const transformItems: UseInfiniteHitsProps["transformItems"] = (
  //   items,
  //   { results }
  // ) => {
  //   return items.map((item, index) => ({
  //     ...item,
  //     position: { index, page: results?.page },
  //   }))
  // }

  const { hits, isLastPage, showMore, results }: InfiniteHitsRes =
    useInfiniteHits()
  const sentinelRef = useRef(null)

  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore()
          }
        })
      })

      observer.observe(sentinelRef.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [isLastPage, showMore])

  return (
    <div className="flex flex-col items-center">
      {results?.nbHits && (
        <span className="mt-6">Znaleziono {results?.nbHits} produktów </span>
      )}
      <div className="grid grid-cols-2 xsmall:grid-cols-3 medium:grid-cols-4  large:grid-cols-5">
        {hits.map((hit: ProductHit) => (
          <ProductHitPreview key={hit.id} hit={hit} />
        ))}
        <span
          className="ais-InfiniteHits-sentinel"
          ref={sentinelRef}
          aria-hidden="true"
        ></span>
        {/* {repeat(20).map((index) => (
          <li key={index} className="w-44 h-72 list-none">
            <SkeletonProductPreview />
          </li>
        ))} */}
      </div>
    </div>
  )
}
