import React, { ChangeEvent, useEffect, useState } from "react"
import { useRange } from "react-instantsearch-hooks-web"
import useDebounce from "../../../../lib/hooks/use-debounce"
import Button from "../../../common/components/button"
import InputNumber from "../../../common/components/input-number"
import PanelTitle from "./PanelTitle"

type SliderProps = {
  attribute: string
}

type InputValues = {
  min: number
  max: number
}

function PriceSlider({ attribute }: SliderProps) {
  const { range, start, canRefine, refine } = useRange({
    attribute,
  })
  const [{ min, max }, setValues] = useState({
    min: range.min,
    max: range.max,
  })

  useEffect(() => {
    console.log("refine")
    console.log(canRefine, range)
    // if (values.max > 0) {
    //   refine([
    //     Number.isFinite(values.min) ? values.min : undefined,
    //     Number.isFinite(values.max) ? values.max : undefined,
    //   ])
    // }
    // refine([min, max])
  }, [min, max])

  const handleRefine = () => {
    refine([min, max])
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
            value={min as number}
            onChange={handleInputChange}
            label="Od"
            name="min"
          />
          <InputNumber
            value={max as number}
            onChange={handleInputChange}
            label="Do"
            name="max"
          />
          <Button onClick={handleRefine}>GO</Button>
        </div>
      </div>
    </div>
  )
}

export default PriceSlider
