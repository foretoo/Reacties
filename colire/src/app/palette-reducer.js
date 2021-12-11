const paletteReducer = (state, action) => {
  switch(action.type) {
    case 'COPY': {
      return {
        ...state,
        copy: {
          code: action.payload.code,
          lumClass: action.payload.class
        }
      }
    }
    case 'COPY_SHOW_OVERLAY': {
      return {
        ...state,
        copy: {
          ...state.copy,
          overlay: true
        }
      }
    }
    case 'COPY_HIDE_OVERLAY': {
      return {
        ...state,
        copy: {
          ...state.copy,
          overlay: false
        }
      }
    }
    case 'CHANGE_COLOR_MODE': {
      return {
        ...state,
        format: {
          animate: true,
          label: action.payload
        }
      }
    }
    case 'MODE_ANIMATION_DONE': {
      return {
        ...state,
        format: {
          ...state.format,
          animate: false
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
