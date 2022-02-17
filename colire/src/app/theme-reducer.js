import {
  saveScheme,
  clearScheme,
  matchDarkTheme,
} from "@utils/helpers"

const themeReducer = (state, action) => {
  switch (action.type) {
  case "CHANGE_THEME": {
    const switcherTheme = action.payload
    let actualTheme = switcherTheme

    if (switcherTheme === "auto") {
      actualTheme = matchDarkTheme() ? "dark" : "light"
      clearScheme()
    }
    else saveScheme(switcherTheme)

    return { ...state, switcherTheme, actualTheme }
  }
  default:
    return state
  }
}

export default themeReducer
