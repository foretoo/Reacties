import Bowser from "bowser"
import { seedColors } from "@utils/constants"
import {
  addLevelProp,
  colorScaler,
  getScheme,
  matchDarkTheme,
} from "@utils/helpers"



const { browser: { name }, platform: { type }} =
  Bowser.getParser(window.navigator.userAgent).parsedResult
const agent = { name, type }

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
  format: "HEX",
  editor: {
    toEdit:   {},
    toCreate: {
      palette: seedColors[0].colors,
      name:    "",
      emoji:   "🖖",
      color:   {
        name:  "",
        color: "#ffffff",
      },
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
  agent,
}

export default initialState
