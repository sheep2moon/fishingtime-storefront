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
  const { range, canRefine, refine, start } = useRange({
    attribute,
  })

  const [values, setValues] = useState({ min: 0, max: 999999 })

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setValues((prev) => ({
  //     ...prev,
  //     [e.target.name]: parseInt(e.target.value),
  //   }))
  // }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    let nValues = []
    nValues[i] = parseInt(e.target.value)
    const missedIndex = i ? 0 : 1
    if (typeof start[missedIndex] !== "number") nValues[missedIndex] = undefined

    console.log({ nValues })

    refine(nValues)
  }

  const debouncedValues = useDebounce(values, 500)

  useEffect(() => {
    if (debouncedValues) {
      refine([debouncedValues.min * 100, debouncedValues.max * 100])
    }
  }, [debouncedValues, refine])

  useEffect(() => {
    console.log({ start })
  }, [start])

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
            value={start[0] as number}
            onChange={(e) => handleInputChange(e, 0)}
            label="Od"
            name="min"
          />
          <InputNumber
            value={start[1] as number}
            onChange={(e) => handleInputChange(e, 1)}
            label="Do"
            name="max"
          />
        </div>
      </div>
    </div>
  )
}

export default PriceSlider
