import React from "react"
import {
  Highlight,
  useInfiniteHits,
  Snippet,
} from "react-instantsearch-hooks-web"
import ProductHitPreview from "../product-hit-preview"

export function InfiniteProductHits({}) {
  const { hits } = useInfiniteHits({
    transformItems: (items) => {
      return items.map((item) => {
        console.log(item)
        return item
      })
    },
  })

  return (
    <div className="ais-InfiniteHits">
      <ul className="ais-InfiniteHits-list">
        {hits.map((hit) => (
          <h1 key={hit.objectID}>hit</h1>
          //   <ProductHitPreview hit={hit.} key={hit.objectID}/>
        ))}
      </ul>
    </div>
  )
}
