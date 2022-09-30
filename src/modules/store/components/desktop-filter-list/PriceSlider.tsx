import React, { ChangeEvent, useEffect, useState } from "react"
import { useRange } from "react-instantsearch-hooks-web"
import useDebounce from "../../../../lib/hooks/use-debounce"
import Button from "../../../common/components/button"
import InputNumber from "../../../common/components/input-number"
import PanelTitle from "./PanelTitle"

type SliderProps = {
  attribute: string
  label: string
}

function PriceSlider({ attribute, label }: SliderProps) {
  const min = 100,
    max = 80000
  const { range, canRefine, refine, start } = useRange({
    attribute,
    min,
    max,
  })

  const [values, setValues] = useState({ min: min / 100, max: max / 100 })
  const [userChange, setUserChange] = useState(false)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserChange(true)
    setValues((prev) => ({
      ...prev,
      [e.target.name]: parseInt(e.target.value),
    }))
  }

  const debouncedValues = useDebounce(values, 500)

  useEffect(() => {
    if (
      userChange &&
      debouncedValues &&
      debouncedValues.min > 0 &&
      debouncedValues.max > 0
    ) {
      refine([debouncedValues.min * 100, debouncedValues.max * 100])
      setUserChange(false)
    }
  }, [debouncedValues, refine, userChange])

  return (
    <div>
      <PanelTitle>Cena</PanelTitle>
      <div className="p-2">
        {/* <div className="flex justify-between">
          <p>{(minSlider / 100).toFixed(2)}zł</p>
          <p>{(maxSlider / 100).toFixed(2)}zł</p>
        </div> */}
        <div className="grid grid-cols-2 mb-2">
          <InputNumber
            value={values.min}
            onChange={handleInputChange}
            label="Od"
            name="min"
          />
          <InputNumber
            value={values.max}
            onChange={handleInputChange}
            label="Do"
            name="max"
          />
        </div>
      </div>
    </div>
  )
}

export default PriceSlider
