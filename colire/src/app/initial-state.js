import { seedColors } from '@utils/constants'
import { addLevelProp, colorScaler } from '@utils/helpers'

const palettes = []

for (const palette of seedColors) {
  const newPalette = colorScaler(addLevelProp(palette))
  palettes.push(newPalette)
}

const initialState = {
  palettes,
  copy: {
    show: false,
    code: '',
    lumClass: ''
  },
  format: {
    show: false,
    label: 'HEX'
  },
  custom: {
    palette: seedColors[0].colors,
    paletteName: '',
    emoji: '🖖',
    color: {
      name: '',
      color: '#ffffff'
    },
    hidden: false,
    valid: {
      name: true,
      color: true,
      warnText: ''
    }
  }
}

export default initialState
