import { h } from "preact"
import { useContext, useRef } from "preact/hooks"
import { Context } from "@app"
import { Switcher } from "@assets"
import "./css/switcher-mode.css"

const SwitcherMode = () => {

  const { state: { format }, dispatch } = useContext(Context)

  const handleChangeMode = useRef((format) => {
    dispatch({
      type:    "CHANGE_COLOR_MODE",
      payload: format,
    })
  })
  const modes = useRef([ "RGB", "HEX" ])

  return (
    <Switcher
      className="switcher-mode"
      defaultValue={format}
      options={modes.current}
      onChange={handleChangeMode.current} />
  )
}

export default SwitcherMode