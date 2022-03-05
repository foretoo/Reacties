import { seedColors } from "@utils/constants"
import {
  addLevelProp,
  colorScaler,
} from "@utils/helpers"



const palettes = []
for (const palette of seedColors) {
  const newPalette = colorScaler(addLevelProp(palette))
  palettes.push(newPalette)
}

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
}

export default initialState
