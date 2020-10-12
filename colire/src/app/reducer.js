const reducer = (state, action) => {
  switch(action.type) {
    case 'COPY': {
      return {
        ...state,
        copy: {
          animate: true,
          code: action.payload
        }
      }
    }
    case 'COPY_ANIMATION_DONE': {
      return {
        ...state,
        copy: {
          ...state.copy,
          animate: false
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

export default reducer
