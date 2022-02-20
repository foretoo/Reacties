import { seedColors } from "@utils/constants"
import {
  addLevelProp,
  colorScaler,
  getScheme,
  matchDarkTheme,
} from "@utils/helpers"

const palettes = []
for (const palette of seedColors) {
  const newPalette = colorScaler(addLevelProp(palette))
  palettes.push(newPalette)
}

const localStorageTheme = getScheme()
const switcherTheme = localStorageTheme ? localStorageTheme : "auto"
const actualTheme =
    localStorageTheme ? localStorageTheme
  : matchDarkTheme()  ? "dark" : "light"

const initialState = {
  palettes,
  overlay: {
    code:     "",
    lumClass: "",
  },
  format: "HEX",
  custom: {
    palette:     seedColors[0].colors,
    paletteName: "",
    emoji:       "🖖",
    color:       {
      name:  "",
      color: "#ffffff",
    },
    hidden: false,
    valid:  {
      name:     true,
      color:    true,
      warnText: "",
    },
  },
  switcherTheme,
  actualTheme,
}

export default initialState
