const paletteReducer = (state, action) => {
  switch (action.type) {
  case "COPY": {
    const { code, lumClass } = action.payload
    return {
      ...state,
      copy: { code, lumClass },
    }
  }
  
  case "CHANGE_COLOR_MODE": {
    return {
      ...state,
      format: action.payload,
    }
  }

  case "CHANGE_PALETTE_LEVEL": {
    const newPalettes = state.palettes.map((palette) => {
      if (palette.id === action.payload.id) {
        return { ...palette, activeLevel: action.payload.level }
      }
      return palette
    })
    return {
      ...state,
      palettes: newPalettes,
    }
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
