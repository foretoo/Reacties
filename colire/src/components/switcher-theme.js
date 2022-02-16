import { h } from "preact"
import { useContext } from "preact/hooks"
import { Context } from "@app"
import "./css/switcher-theme.css"

const SwitcherTheme = () => {

  const { state: { theme }, dispatch } = useContext(Context)

  const handleChangeMode = (theme) => {
    dispatch({
      type:    "CHANGE_THEME",
      payload: theme,
    })
  }

  const themes = [ "dark", "auto", "light" ]
    .map((option) => (
      <li
        className={`theme-option` + (option === theme ? ` active` : ``)}
        onClick={option === theme ? null : () => handleChangeMode(option)} >
        {option}
      </li>
    ))

  return (
    <ul className="theme-switcher">
      {themes}
    </ul>
  )
}

export default SwitcherTheme