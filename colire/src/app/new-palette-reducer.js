import addLevelProp from '../utils/add-level-prop'
import colorScaler from '../utils/color-scaler'

const newPaletteReducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_COLOR': {
      const color = action.payload
      const { palette } = state.custom
      const newPalette = palette.filter(c => c.color != color)
      return {
        ...state,
        custom: {
          ...state.custom,
          palette: newPalette
        }
      }
    }
    case 'ADD_NEW_COLOR': {
      const { palette, color, valid } = state.custom
      if (!color.name.trim()) {
        return {
          ...state,
          custom: {
            ...state.custom,
            valid: {
              ...valid,
              warnText: 'Enter a color name.'
            }
          }
        }
      }
      return {
        ...state,
        custom: {
          ...state.custom,
          palette: palette.concat({
            name: color.name.trim(),
            color: color.color
          }),
          color: {
            ...color,
            name: ''
          },
          valid: {
            ...valid,
            color: true,
            warnText: ''
          }
        }
      }
    }
    case 'CHANGE_NEW_COLOR': {
      const color = action.payload
      const { palette, valid } = state.custom
      const colorIsValid = !palette.some(c => c.color === color)
      const warnText =
        colorIsValid ?
          valid.warnText.replace('Color should be unique.', '').trim() :
          valid.warnText.includes('Color should be unique.') ?
            valid.warnText :
            valid.warnText.concat('Color should be unique. ')

      return {
        ...state,
        custom: {
          ...state.custom,
          color: {
            ...state.custom.color,
            color
          },
          valid: {
            ...valid,
            color: colorIsValid,
            warnText
          }
        }
      }
    }
    case 'CHANGE_NEW_COLOR_NAME': {
      const nameValue = action.payload
      const { palette, valid } = state.custom
      const nameIsValid = !palette.some(c => c.name === nameValue)
      let warnText = nameValue ? valid.warnText.replace('Enter a color name.', '').trim() : 'Enter a color name. '
      warnText =
        nameIsValid ?
          warnText.replace('Name should be unique.', '').trim() :
          valid.warnText.includes('Name should be unique.') ?
            valid.warnText :
            warnText.concat('Name should be unique. ')

      return {
        ...state,
        custom: {
          ...state.custom,
          color: {
            ...state.custom.color,
            name: nameValue
          },
          valid: {
            ...valid,
            name: nameIsValid,
            warnText
          }
        }
      }

    }
    case 'TOGGLE_NEW_COLOR_FORM': {
      const { hidden } = state.custom
      return {
        ...state,
        custom: {
          ...state.custom,
          hidden: !hidden
        }
      }
    }
    case 'CHANGE_PALETTE': {
      const newOrder = action.payload
      const { palette } = state.custom
      const newPalette = newOrder.map(c => palette.find(_c => c === _c.name))
      return {
        ...state,
        custom: {
          ...state.custom,
          palette: newPalette
        }
      }
    }
    case 'CHANGE_PALETTE_NAME': {
      const paletteName = action.payload
      return {
        ...state,
        custom: {
          ...state.custom,
          paletteName
        }
      }
    }
    case 'CHANGE_PALETTE_EMOJI': {
      const emoji = action.payload
      return {
        ...state,
        custom: {
          ...state.custom,
          emoji
        }
      }
    }
    case 'SAVE_PALETTE': {
      const { palette, paletteName, emoji } = state.custom
      const newPalette = colorScaler(addLevelProp({
        paletteName,
        id: paletteName.toLowerCase().replace(/ /g, '-'),
        emoji,
        colors: palette
      }))
      const palettes = state.palettes.concat(newPalette)
      return {
        ...state,
        palettes,
        custom: {
          palette: [],
          paletteName: '',
          emoji: '🖖',
          color: { name: '', color: '#ffffff' },
          hidden: false,
          valid: { name: true, color: true, warnText: '' }
        }
      }
    }
    default:
      return state
  }
}

export default newPaletteReducer
