const paletteReducer = (state, action) => {
  switch (action.type) {
    
    case "CHANGE_COLOR_MODE": {
      return {
        ...state,
        format: action.payload,
      }
    }

    case "CHANGE_PALETTE_LEVEL": {
      const { id, activeLevel } = action.payload
      const palettes = state.palettes.map((palette) => {
        if (palette.id === id) {
          return { ...palette, activeLevel }
        }
        return palette
      })
      return { ...state, palettes }
    }

    case "DELETE_PALETTE": {
      const id = action.payload
      const newPalettes = state.palettes.filter((palette) => palette.id !== id)
      return {
        ...state,
        palettes: newPalettes,
      }
    }
    
    default:
      return state
  }
}

export default paletteReducer
