import { h } from "preact"
import { useContext } from "preact/hooks"
import { Context } from "@app"
import "./css/snackbar.css"

const Snackbar = () => {

  const { state } = useContext(Context)

  const snackbarShowClass = state.format.show ? " show" : ""

  return (
    <div class={"snackbar" + snackbarShowClass}>
      Format changed to {state.format.label}
    </div>
  )
}

export default Snackbar
