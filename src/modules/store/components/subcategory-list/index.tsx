import React, { useEffect, useRef, useState, useCallback } from "react"
import {
  useRefinementList,
  UseRefinementListProps,
  useClearRefinements,
} from "react-instantsearch-hooks"
import { RefinementListWidgetParams } from "instantsearch.js/es/widgets/refinement-list/refinement-list"
import Checkbox from "../../../common/components/checkbox"
import PanelTitle from "../filter-list/PanelTitle"
import { useRouter } from "next/router"
import {
  handleToTitle,
  titleToHandle,
} from "../../../../lib/util/transform-titles-links"

export type RefinementListProps = React.ComponentProps<"div"> &
  UseRefinementListProps &
  Pick<RefinementListWidgetParams, "searchable" | "searchablePlaceholder"> & {
    title?: string
    handle?: string
  }

const SubcategoryList = (props: RefinementListProps) => {
  const transformItems = useCallback(
    (items) =>
      items.filter((item: any) => {
        console.log(item)

        return item.count > 0
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
          {isShowingMore ? "Zwi??" : "Rozwi??"}
        </button>
      )}
    </div>
  )
}

export default SubcategoryList
