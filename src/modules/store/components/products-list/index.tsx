import React, { useEffect, useRef } from "react"
import { useInfiniteHits } from "react-instantsearch-hooks-web"
import Spinner from "../../../common/icons/spinner"
import ProductHitPreview from "../product-hit-preview"

export function InfiniteProductHits({}) {
  const { hits, isLastPage, showMore } = useInfiniteHits()
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
      <div className="grid grid-cols-2 xsmall:grid-cols-3 medium:grid-cols-4  large:grid-cols-5">
        {hits.map((hit) => (
          <ProductHitPreview key={hit.objectID} hit={hit} />
        ))}
        <span
          className="ais-InfiniteHits-sentinel"
          ref={sentinelRef}
          aria-hidden="true"
        >
          {isLastPage ? "Koniec" : <Spinner />}
        </span>
      </div>
    </div>
  )
}
