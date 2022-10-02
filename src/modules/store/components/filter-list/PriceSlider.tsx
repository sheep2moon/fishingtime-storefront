import React, { ChangeEvent, useState } from "react"
import { useRange } from "react-instantsearch-hooks-web"
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
