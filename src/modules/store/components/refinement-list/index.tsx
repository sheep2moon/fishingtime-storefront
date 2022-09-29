import React, { useEffect, useRef, useState, useCallback } from "react"
import {
  useRefinementList,
  UseRefinementListProps,
} from "react-instantsearch-hooks"
import { RefinementListWidgetParams } from "instantsearch.js/es/widgets/refinement-list/refinement-list"
import Checkbox from "../../../common/components/checkbox"
import PanelTitle from "../filter-list/PanelTitle"

export type RefinementListProps = React.ComponentProps<"div"> &
  UseRefinementListProps &
  Pick<RefinementListWidgetParams, "searchable" | "searchablePlaceholder"> & {
    title?: string
  }

const RefinementList = (props: RefinementListProps) => {
  const transformItems = useCallback(
    (items) =>
      items.map((item: any) => {
        return item
      }),
    []
  )

  const {
    canToggleShowMore,
    isFromSearch,
    isShowingMore,
    items,
    refine,
    searchForItems,
    toggleShowMore,
  } = useRefinementList({ ...props, transformItems })

  if (items.length === 0) return null

  return (
    <div className="flex flex-col">
      {props.title && <PanelTitle>{props.title}</PanelTitle>}
      <ul className=" p-2">
        {items.map((item) => (
          <li key={item.value}>
            <label className="flex items-center">
              <Checkbox
                label=""
                checked={item.isRefined}
                onChange={() => {
                  refine(item.value)
                }}
              />
              <span
                className="ais-RefinementList-labelText"
                dangerouslySetInnerHTML={{ __html: item.highlighted! }}
              />
              <span className="ais-RefinementList-count">{item.count}</span>
            </label>
          </li>
        ))}
      </ul>

      {props.showMore && canToggleShowMore && (
        <button
          className=""
          disabled={!canToggleShowMore}
          onClick={toggleShowMore}
        >
          {isShowingMore ? "Zwiń" : "Rozwiń"}
        </button>
      )}
    </div>
  )
}

export default RefinementList
