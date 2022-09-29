import { useEffect, useState } from "react"
import { useRange } from "react-instantsearch-hooks-web"
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

  const [minValue, setMinValue] = useState(min / 100)
  const [maxValue, setMaxValue] = useState(max / 100)
  const [change, setChange] = useState(false)

  const handleRefine = () => {
    console.log(canRefine)
    console.log(range)

    refine([minValue * 100, maxValue * 100])
  }

  const handleMinValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinValue(parseInt(e.target.value))
  }
  const handleMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(parseInt(e.target.value))
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
            value={minValue}
            onChange={handleMinValue}
            label="Od"
            name="min"
          />
          <InputNumber
            value={maxValue}
            onChange={handleMaxValue}
            label="Do"
            name="max"
          />
        </div>
        <Button variant="primary" onClick={handleRefine}>
          Zastosuj
        </Button>
      </div>
    </div>
  )
}

export default PriceSlider
