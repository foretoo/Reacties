const reducer = (state, action) => {
  switch(action.type) {
    case 'COPY': {
      return {
        ...state,
        copy: {
          animate: true,
          code: action.payload.code,
          class: action.payload.class
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
    case 'ADD_NEW_COLOR': {
      const { palette, color } = state.custom
      return {
        ...state,
        custom: {
          ...state.custom,
          palette: palette.concat(color)
        }
      }
    }
    case 'CHANGE_NEW_COLOR': {
      const { hex, rgb } = action.payload
      return {
        ...state,
        custom: {
          ...state.custom,
          color: {
            ...state.custom.color,
            hex,
            rgb
          }
        }
      }
    }
    case 'CHANGE_NEW_COLOR_NAME': {
      const name = action.payload
      return {
        ...state,
        custom: {
          ...state.custom,
          color: {
            ...state.custom.color,
            name
          }
        }
      }
    }
    case 'TOGGLE_NEW_COLOR_FORM': {
      return {
        ...state,
        custom: {
          ...state.custom,
          hidden: !state.custom.hidden
        }
      }
    }
    default:
      return state
  }
}

export default reducer
