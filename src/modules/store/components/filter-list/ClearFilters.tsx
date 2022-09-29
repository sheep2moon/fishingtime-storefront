import React, { useEffect } from "react"
import {
  ClearRefinements,
  CurrentRefinements,
  useClearRefinements,
  useCurrentRefinements,
} from "react-instantsearch-hooks-web"
import Button from "../../../common/components/button"

const ClearFilters = () => {
  const { refine } = useClearRefinements()

  return (
    <div>
      <Button variant="secondary" onClick={refine}>
        Wyczyść wszystkie
      </Button>
    </div>
  )
}

export default ClearFilters
