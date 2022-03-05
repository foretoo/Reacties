import { h } from "preact"
import { useConst } from "@utils/hooks"
import { usePalettes, usePalettesDispatch } from "@app/ctx"
import { Switcher } from "@assets"
import "./css/switcher-mode.css"

const SwitcherMode = () => {

  const { format } = usePalettes()
  const dispatch = usePalettesDispatch()

  const handleChangeMode = useConst((format) => {
    dispatch({
      type:    "CHANGE_COLOR_MODE",
      payload: format,
    })
  })
  const modes = useConst([ "RGB", "HEX" ])

  return (
    <Switcher
      className="switcher-mode"
      defaultValue={format}
      options={modes}
      onChange={handleChangeMode} />
  )
}

export default SwitcherMode