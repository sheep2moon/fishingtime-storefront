import { Listbox } from "@headlessui/react"
import clsx from "clsx"
import React from "react"
import { useSortBy } from "react-instantsearch-hooks-web"
import { FaSort } from "react-icons/fa"
import { BiChevronRight } from "react-icons/bi"

const items = [
  {
    value: "products:created_at:desc",
    label: "Od najnowszych",
  },
  {
    value: "products:created_at:asc",
    label: "Od najstarszych",
  },
  {
    value: "products:updated_at:desc",
    label: "Ostatnio modyfikowane malejąco",
  },
  {
    value: "products:updated_at:asc",
    label: "Ostatnio modyfikowane rosnąco ",
  },
  {
    value: "products:variants.prices.amount:asc",
    label: "Cena rosnąco",
  },
  {
    value: "products:variants.prices.amount:desc",
    label: "Cena malejąco",
  },
  {
    value: "products:variants.inventory_quantity:asc",
    label: "Dostępność rosnąco",
  },
  {
    value: "products:variants.inventory_quantity:desc",
    label: "Dostępność malejąco",
  },
]

const SortSelector = () => {
  const { currentRefinement, options, refine } = useSortBy({ items })
  return (
    <div className="ml-auto relative z-20">
      <Listbox value={currentRefinement} onChange={refine}>
        <Listbox.Button className="bg-slate-200 px-4 py-2 shadow-md rounded-md font-semibold w-fit flex gap-1 items-center">
          Sortuj
          <FaSort />
        </Listbox.Button>
        <Listbox.Options className="bg-slate-100 absolute right-0 w-fit whitespace-nowrap rounded-md shadow-lg shadow-black/30">
          {options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option.value}
              className={clsx(
                "p-2 flex gap-1 items-center hover:bg-amber-300/30 cursor-pointer",
                {
                  "bg-amber-300": currentRefinement === option.value,
                }
              )}
            >
              <BiChevronRight />
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}

export default SortSelector
