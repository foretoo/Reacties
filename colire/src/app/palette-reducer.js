const paletteReducer = (state, action) => {
  switch(action.type) {
    case 'COPY': {
      return {
        ...state,
        copy: {
          code: action.payload.code,
          lumClass: action.payload.lumClass
        }
      }
    }
    case 'COPY_OVERLAY_SHOW': {
      return {
        ...state,
        copy: {
          ...state.copy,
          show: true
        }
      }
    }
    case 'COPY_OVERLAY_HIDE': {
      return {
        ...state,
        copy: {
          ...state.copy,
          show: false
        }
      }
    }
    case 'CHANGE_COLOR_MODE': {
      return {
        ...state,
        format: {
          label: action.payload
        }
      }
    }
    case 'COLOR_MODE_SHOW': {
      return {
        ...state,
        format: {
          ...state.format,
          show: true
        }
      }
    }
    case 'COLOR_MODE_HIDE': {
      return {
        ...state,
        format: {
          ...state.format,
          show: false
        }
      }
    }
    case 'CHANGE_PALETTE_LEVEL': {
      const newPalettes = state.palettes.map(palette => {
        if (palette.id === action.payload.id) {
          return { ...palette, activeLevel: action.payload.level }
        }
        return palette
      })
      return {
        ...state,
        palettes: newPalettes
      }
    }
    default:
      return state
  }
}

export default paletteReducer
