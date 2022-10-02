import clsx from "clsx"
import { useState } from "react"
import Button from "../../../common/components/button"
import ClearFilters from "./ClearFilters"
import Filters from "./Filters"

const FilterList = () => {
  const [filtersOpened, setFiltersOpened] = useState(false)
  return (
    <div className="w-full small:max-w-xs">
      <div className="fixed bottom-2 left-2 z-50 small:hidden">
        <Button onClick={() => setFiltersOpened(true)}>Filtruj</Button>
      </div>
      <div
        className={clsx(
          "fixed small:relative z-50 small:z-0 bg-slate-50 bottom-0 transition-all flex flex-col w-full overflow-y-scroll small:overflow-y-hidden pb-16",
          { "top-16": filtersOpened, "top-[120%]": !filtersOpened }
        )}
      >
        <div className="relative">
          <Filters />

          <div
            className={clsx(
              "grid grid-cols-2 fixed bottom-0 left-0 right-0 border-t border-gray-400",
              { hidden: !filtersOpened }
            )}
          >
            <ClearFilters />
            <Button variant="primary" onClick={() => setFiltersOpened(false)}>
              Filtruj
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterList
