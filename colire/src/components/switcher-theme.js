import { h } from "preact"
import { useConst, useCtx } from "@utils/hooks"
import "./css/switcher-theme.css"

const SwitcherTheme = () => {

  const { state: { switcherTheme }, dispatch } = useCtx()

  const handleChangeMode = useConst((theme) => {
    dispatch({
      type:    "CHANGE_THEME",
      payload: theme,
    })
  })

  const themes = [ "dark", "auto", "light" ]
    .map((option) => (
      <li
        className={`theme-option` + (option === switcherTheme ? ` active` : ``)}
        onClick={option === switcherTheme ? null : () => handleChangeMode(option)} >
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