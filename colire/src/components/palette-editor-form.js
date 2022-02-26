import { h } from "preact"
import { useContext, useState } from "preact/hooks"
import { Context } from "@app"
import chroma from "chroma-js"
import {
  Button,
  ColorPicker,
  HueHandler,
  ToneHandler,
  Switcher,
} from "@assets"
import "./css/palette-editor-form.css"

const PaletteEditorForm = ({ paletteID }) => {
  
  const { state: { editor }, dispatch } = useContext(Context)
  let color, palette, hidden, valid
  if (paletteID) ({ toEdit: { color, palette }, hidden, valid } = editor)
  else ({ toCreate: { color, palette }, hidden, valid } = editor)

  const [ pickerMoving, setPickerMoving ] = useState(false)

  let formClass = "editor-form",
      inputClass = "editor-color-name",
      submitClass = "submit"

  if (hidden) formClass += " hidden"
  if (chroma(color.color).luminance() < 0.333) inputClass += " light"
  if (valid.warnText) submitClass += " warn"

  const handleAddColor = () => {
    const validColor = !palette.some((c) => c.color === color.color)
    if (!validColor || !valid.name) {
      dispatch({
        type:    "CHANGE_NEW_COLOR_NAME",
        payload: color.name,
        paletteID,
      })
      dispatch({
        type:    "CHANGE_NEW_COLOR",
        payload: color.color,
        paletteID,
      })
      return
    }

    dispatch({
      type: "ADD_NEW_COLOR",
      paletteID,
    })
  }
  const handleChangeColor = ({ hex, moving }) => {
    setPickerMoving(moving)
    dispatch({
      type:    "CHANGE_NEW_COLOR",
      payload: hex,
      paletteID,
    })
  }
  const handleChangeColorName = (e) => {
    const name = e.target.value
    dispatch({
      type:    "CHANGE_NEW_COLOR_NAME",
      payload: name,
      paletteID,
    })
  }
  const handleRandomColor = () => {
    const randomColor = chroma.random()
    const hex = chroma(randomColor).hex()
    handleChangeColor({ hex })
  }

  return (
    <ColorPicker className={formClass}
      color={color.color}
      onChange={handleChangeColor} >
      <div>
        <Button name="Random" onClick={handleRandomColor} />
        <Switcher options={[ "RGB", "HEX" ]} />
      </div>
      <input className="editor-color-name"
          type="number"
          placeholder="color code"
          style={{
            alignSelf: "flex-end",
            width: "122px",
            padding: "10px",
          }} />
      <HueHandler
        size={180}
        style={{ marginBottom: "40px", marginTop: "20px" }} />
      <div>
        <ToneHandler size={100} />
        <input className={inputClass}
          type="text"
          value={color.name}
          placeholder="color name"
          style={{
            backgroundColor: color.color,
            width: "150px",
            padding: "70px 10px 10px 10px",
            transition: pickerMoving ? "none" : "0.2s",
          }}
          onChange={handleChangeColorName} />
      </div>
      <div className={submitClass}>
        <Button name="Add" onClick={handleAddColor} />
        <p className="warn-info">{valid.warnText.trim()}</p>
      </div>
    </ColorPicker>
  )
}

export default PaletteEditorForm
