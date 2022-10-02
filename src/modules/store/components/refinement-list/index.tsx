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
    handle?: string
  }

const RefinementList = (props: RefinementListProps) => {
  const transformItems = useCallback(
    (items) =>
      items.filter((item: any) => {
        return item.count > 0
      }),
    []
  )

  const { items, refine } = useRefinementList({
    ...props,
    transformItems,
    limit: 30,
  })

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
    </div>
  )
}

export default RefinementList
