const themeReducer = (state, action) => {
  switch (action.type) {
  case "CHANGE_THEME": {
    const theme = action.payload
    return { ...state, theme }
  }
  default:
    return state
  }
}

export default themeReducer
