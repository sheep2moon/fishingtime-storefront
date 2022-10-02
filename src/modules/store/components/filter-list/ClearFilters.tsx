import { useRouter } from "next/router"
import React, { useEffect } from "react"
import {
  ClearRefinements,
  CurrentRefinements,
  useClearRefinements,
  useCurrentRefinements,
} from "react-instantsearch-hooks-web"
import Button from "../../../common/components/button"

const ClearFilters = () => {
  const { refine, canRefine } = useClearRefinements()

  const handleClear = () => {
    refine()
  }

  return (
    <Button variant="alternative" disabled={!canRefine} onClick={handleClear}>
      Wyczyść wszystkie
    </Button>
  )
}

export default ClearFilters
