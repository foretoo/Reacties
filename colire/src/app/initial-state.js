import seedColors from '../seed-colors'
import addLevel from '../utils/add-level'
import colorScaler from '../utils/color-scaler'

const palettes = []

for (const palette of seedColors) {
  const newPalette = colorScaler(addLevel(palette))
  palettes.push(newPalette)
}

const initialState = {
  palettes,
  copy: {
    status: false,
    code: '',
    id: null
  },
  mode: 'HEX'
}

export default initialState
