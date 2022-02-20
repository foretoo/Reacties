import { h } from "preact"
import { useContext } from "preact/hooks"
import { Context } from "@app"
import { Switcher } from "@assets"
import "./css/switcher-mode.css"

const SwitcherMode = () => {

  const { state: { format }, dispatch } = useContext(Context)

  const handleChangeMode = (format) => {
    dispatch({
      type:    "CHANGE_COLOR_MODE",
      payload: format,
    })
  }

  return (
    <Switcher
      className="switcher-mode"
      defaultValue={format}
      options={[ "RGB", "HEX" ]}
      onChange={handleChangeMode} />
  )
}

export default SwitcherMode