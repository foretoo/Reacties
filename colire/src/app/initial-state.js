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
    animate: false,
    code: '',
    class: ''
  },
  format: {
    animate: false,
    label: 'HEX'
  },
  custom: {
    palette: [{
      name: 'grey',
      rgb: 'rgb(187,187,187)',
      hex: '#bbbbbb'
    }],
    color: {
      name: '',
      rgb: '',
      hex: '#fff'
    },
    hidden: false,
    validName: true
  }
}

export default initialState
