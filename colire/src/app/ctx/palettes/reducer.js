const reducer = (state, action) => {
  switch (action.type) {

    case "CHANGE_COLOR_MODE": {
      return {
        ...state,
        format: action.payload,
      }
    }

    case "CHANGE_PALETTE_LEVEL": {
      const { id, activeLevel } = action.payload
      const palettes = state.palettes.map((palette) => (
        palette.id === id
        ? { ...palette, activeLevel }
        : palette
      ))
      return { ...state, palettes }
    }

    case "DELETE_PALETTE": {
      const id = action.payload
      const palettes = state.palettes.filter((palette) => palette.id !== id)
      return { ...state, palettes }
    }
    
    default:
      return state
  }
}

export default reducer
