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
  const {
    range,
    canRefine,
    refine,
    start: [minValue, maxValue],
  } = useRange({
    attribute,
  })

  useEffect(() => {
    console.log(minValue, maxValue)
    console.log(range)
  }, [minValue, maxValue, range])

  return (
    <div>
      <PanelTitle>Cena</PanelTitle>
      <div className="p-2">
        {/* <div className="flex justify-between">
          <p>{(minSlider / 100).toFixed(2)}zł</p>
          <p>{(maxSlider / 100).toFixed(2)}zł</p>
        </div> */}
        <div className="grid grid-cols-2 mb-2">
          {/* <InputNumber
            value={minValue as number}
            onChange={handleInputChange}
            label="Od"
            name="min"
          /> */}
          {/* <InputNumber
            value={maxValue as number}
            onChange={handleInputChange}
            label="Do"
            name="max"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default PriceSlider
