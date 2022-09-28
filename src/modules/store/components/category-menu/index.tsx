import React, { useCallback } from "react"
import { useMenu, UseMenuProps } from "react-instantsearch-hooks"
import PanelTitle from "../filter-list/PanelTitle"

export type MenuProps = React.ComponentProps<"div"> & UseMenuProps

const CategoryMenu = (props: MenuProps) => {
  const transformItems = useCallback(
    (items: any) =>
      items.map((item: any) => {
        console.log(item)
        return item
      }),
    []
  )

  const {
    canToggleShowMore,
    isShowingMore,
    items,
    refine,
    createURL,
    toggleShowMore,
  } = useMenu({ ...props, transformItems })

  return (
    <div>
      <PanelTitle>Podkategorie</PanelTitle>
      <div className="p-2">
        <ul className="">
          {items.map((item) => (
            <li key={item.value} className="p-1">
              <a
                className="flex justify-between"
                onClick={(event) => {
                  event.preventDefault()
                  refine(item.value)
                }}
                href={createURL(item.value)}
              >
                <span className="ais-Menu-label">{item.label}</span>
                <span className="ais-Menu-count">{item.count}</span>
              </a>
            </li>
          ))}
        </ul>

        {props.showMore && canToggleShowMore && (
          <button disabled={!canToggleShowMore} onClick={toggleShowMore}>
            {isShowingMore ? "Zwiń" : "Rozwiń"}
          </button>
        )}
      </div>
    </div>
  )
}

export default CategoryMenu
