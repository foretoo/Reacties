import { h } from "preact"
import { useContext } from "preact/hooks"
import { Context } from "@app"
import { ColorPicker, HueHandler, ToneHandler } from "@assets"

const Picker = () => {

  const { state, dispatch } = useContext(Context)
  const { color } = state.custom.color

  const handleChangeColor = ({ hex }) => {
    dispatch({
      type:    "CHANGE_NEW_COLOR",
      payload: hex,
    })
  }

  return (
    <ColorPicker color={color} onChange={handleChangeColor} >
      <HueHandler />
      <ToneHandler />
      <button style={{ background: color, padding: "40px" }}>
        ADD
      </button>
    </ColorPicker>
  )
}

export default Picker