import { h } from "preact"
import { useState, useEffect } from "preact/hooks"
import chroma from "chroma-js"
import { useEditor, useEditorDispatch } from "@app/ctx"
import {
  Button,
  ColorPicker,
  HueHandler,
  ToneHandler,
  Switcher,
} from "@assets"
import { useConst } from "@utils/hooks"
import { throttle } from "@utils/helpers"
import "./css/palette-editor-form.css"

const EditorColorForm = ({ target }) => {
  
  const editor = useEditor()
  const dispatch = useEditorDispatch()
  const { [target]: { color, colors, valid }, hidden } = editor

  const [ pickerMoving, setPickerMoving ] = useState(false)
  const [ pickedColor, setPickedColor ] = useState("#fff")

  let formClass = "pick-color-form",
      inputClass = "editor-color-name",
      submitClass = "submit"

  if (hidden) formClass += " hidden"
  if (chroma(color.color).luminance() < 0.333) inputClass += " light"
  if (valid.warnText) submitClass += " warn"

  const handleAddColor = () => {
    const validColor = !colors.some((c) => c.color === color.color)
    if (!validColor || !valid.name) {
      dispatch({
        type:    "CHANGE_NEW_COLOR_NAME",
        payload: { name: color.name, target },
      })
      dispatch({
        type:    "CHANGE_NEW_COLOR",
        payload: { color: color.color, target },
      })
      return
    }

    dispatch({
      type: "ADD_NEW_COLOR",
      payload: target,
    })
  }
  const throttleChangeColor = useConst(throttle(
    (hex) => dispatch({
      type:    "CHANGE_NEW_COLOR",
      payload: { color: hex, target },
    }), 333 ))
  useEffect(() => throttleChangeColor(pickedColor), [ pickedColor ])
  const handleChangeColor = ({ hex, moving }) => {
    setPickerMoving(moving)
    setPickedColor(hex)
  }
  const handleChangeColorName = (e) => {
    const name = e.target.value
    dispatch({
      type:    "CHANGE_NEW_COLOR_NAME",
      payload: { name, target },
    })
  }
  const handleRandomColor = () => {
    const randomColor = chroma.random()
    const hex = chroma(randomColor).hex()
    handleChangeColor({ hex })
  }

  return (
    <ColorPicker className={formClass}
      color={pickedColor}
      onChange={handleChangeColor} >
      <div>
        <Button name="Random" onClick={handleRandomColor} />
        <Switcher options={[ "RGB", "HEX" ]} />
      </div>
      <input className="editor-color-name"
          type="number"
          placeholder="color code" />
      <HueHandler
        size={150}
        style={{ marginBottom: "40px", marginTop: "20px" }} />
      <div>
        <ToneHandler size={100} />
        <input className={inputClass}
          type="text"
          value={color.name}
          placeholder="color name"
          style={{
            width: "129px",
            padding: "70px 10px 10px 10px",
            backgroundColor: pickedColor,
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

export default EditorColorForm