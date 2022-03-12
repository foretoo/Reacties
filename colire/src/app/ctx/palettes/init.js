import { seedColors } from "@utils/constants"
import { addLevelProp, colorScaler } from "@utils/helpers"

const palettes = []
for (const palette of seedColors) {
  const newPalette = colorScaler(addLevelProp(palette))
  palettes.push(newPalette)
}

const init = {
  palettes,
  format: "HEX",
  toExport: {
    css:  { hex: "", rgb: "" },
    json: { hex: "", rgb: "" },
    display: false,
  },
}

export default init
