import Bowser from "bowser"
import { getScheme, matchDarkTheme } from "./utils"

const result = Bowser.getParser(window.navigator.userAgent)
const { browser: { name }, platform: { type }} = result.parsedResult
const width = document.body.offsetWidth
const agent = { name, type, width }

const localStorageTheme = getScheme()
const switcherTheme = localStorageTheme ? localStorageTheme : "auto"
const actualTheme =
    localStorageTheme ? localStorageTheme
  : matchDarkTheme()  ? "dark" : "light"

const init = {
  switcherTheme,
  actualTheme,
  agent,
}

export default init
