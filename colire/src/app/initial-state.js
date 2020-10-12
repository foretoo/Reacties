import seedColors from '../seed-colors'
import addLevelProp from '../utils/add-level-prop'
import colorScaler from '../utils/color-scaler'

const palettes = []

for (const palette of seedColors) {
  const newPalette = colorScaler(addLevelProp(palette))
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
