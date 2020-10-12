const reducer = (state, action) => {
  switch(action.type) {
    case 'COPY':
      return {
        ...state,
        copy: {
          status: true,
          code: action.payload.code,
          id: action.payload.id
        }
      }
    case 'ANIMATION_DONE':
      return {
        ...state,
        copy: {
          ...state.copy,
          status: false
        }
      }
    case 'CHANGE_COLOR_MODE':
      return {
        ...state,
        mode: action.payload
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
