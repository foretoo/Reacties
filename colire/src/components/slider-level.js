import { h } from "preact"
import { usePalettesDispatch } from "@app/ctx"
import { Slider } from "@assets"
import "./css/slider-level.css"

const SliderLevel = ({ id, level }) => {

  const dispatch = usePalettesDispatch()

  const handleChangeLevel = (level) => {
    dispatch({
      type:    "CHANGE_PALETTE_LEVEL",
      payload: { id, activeLevel: level },
    })
  }

  return (
    <Slider className="slider-level"
      defaultValue={level}
      min={100}
      max={900}
      step={100}
      label={true}
      onChange={handleChangeLevel}
    />
  )
}

export default SliderLevel
