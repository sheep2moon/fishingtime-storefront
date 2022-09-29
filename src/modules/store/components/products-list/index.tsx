import repeat from "@lib/util/repeat"
import React, { useEffect, useRef } from "react"
import { useInfiniteHits } from "react-instantsearch-hooks-web"
import { resourceLimits } from "worker_threads"
import getNumberOfSkeletons from "../../../../lib/util/get-number-of-skeletons"
import Spinner from "../../../common/icons/spinner"
import { ProductHit } from "../../../search/components/hit"
import SkeletonProductPreview from "../../../skeletons/components/skeleton-product-preview"
import ProductHitPreview from "../product-hit-preview"

type InfiniteHitsRes = {
  hits: ProductHit[]
  isLastPage: boolean
  showMore: () => void
  results?: any
}

export function InfiniteProductHits({}) {
  // const what: InfiniteHitsRes = useInfiniteHits()
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
      <span className="mt-6">Znaleziono {results?.nbHits} produktów </span>
      <div className="grid grid-cols-2 xsmall:grid-cols-3 medium:grid-cols-4  large:grid-cols-5">
        {hits.map((hit: ProductHit) => (
          <ProductHitPreview key={hit.id} hit={hit} />
        ))}
        <span
          className="ais-InfiniteHits-sentinel"
          ref={sentinelRef}
          aria-hidden="true"
        ></span>
        {!isLastPage &&
          repeat(20).map((index) => (
            <li
              key={index}
              className="w-64 2xsmall:h-72 2xsmall:w-44 small:w-52 small:h-72"
            >
              <SkeletonProductPreview />
            </li>
          ))}
      </div>
    </div>
  )
}
