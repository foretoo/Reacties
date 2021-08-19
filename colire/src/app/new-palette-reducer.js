const newPaletteReducer = (state, action) => {
  switch(action.type) {
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
      const { palette } = state.custom
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
      const { palette } = state.custom
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

export default newPaletteReducer
