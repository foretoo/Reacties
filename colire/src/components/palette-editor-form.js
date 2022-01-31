import { h } from "preact"
import { useContext } from "preact/hooks"
import { Context } from "@app"
import chroma from "chroma-js"
import {
  Button,
  ColorPicker,
  HueHandler,
  ToneHandler,
} from "@assets"

const PaletteEditorForm = () => {

  const { state, dispatch } = useContext(Context)
  const { color, palette, hidden, valid } = state.custom

  let formClass = "new-palette-form",
      lumClass = "new-palette-button",
      inputClass = "new-palette-input-name",
      submitClass = "submit"

  if (hidden) formClass += " hidden"
  if (chroma(color.color).luminance() < 0.333) lumClass += " light"
  if (!valid.name || valid.warnText) (inputClass += " warn", submitClass += " warn")
  if (!valid.color && !submitClass.includes("warn")) submitClass += " warn"

  const handleAddColor = () => {
    if (!valid.name || !valid.color) return

    const validColor = !palette.some((c) => c.color === color.color)
    if (!validColor) {
      dispatch({
        type:    "CHANGE_NEW_COLOR_NAME",
        payload: color.name,
      })
      dispatch({
        type:    "CHANGE_NEW_COLOR",
        payload: color.color,
      })
      return
    }

    dispatch({
      type: "ADD_NEW_COLOR",
    })
  }
  const handleChangeColor = ({ hex }) => {
    dispatch({
      type:    "CHANGE_NEW_COLOR",
      payload: hex,
    })
  }
  const handleChangeColorName = (e) => {
    const name = e.target.value
    dispatch({
      type:    "CHANGE_NEW_COLOR_NAME",
      payload: name,
    })
  }
  const handleRandomColor = () => {
    const randomColor = chroma.random()
    const hex = chroma(randomColor).hex()
    handleChangeColor({ hex })
  }
  const handleClearPalette = () => {
    dispatch({
      type: "CLEAR_PALETTE",
    })
  }

  return (
    <ColorPicker color={color.color} onChange={handleChangeColor} >
      <Button name="Random" onClick={handleRandomColor} />
      <HueHandler />
      <ToneHandler />
      <input class={inputClass}
        type="text"
        value={color.name}
        placeholder="color name"
        onChange={handleChangeColorName} />
      <div class={submitClass}>
        <Button className={lumClass}
          name="Add"
          style={{ backgroundColor: color.color }}
          onClick={handleAddColor} />
        <p class="warn-info">{valid.warnText}</p>
      </div>
    </ColorPicker>
  )
}

export default PaletteEditorForm
