const animationReducer = (state, action) => {
  switch (action.type) {
    case "COPY_OVERLAY_SHOW": {
      return {
        ...state,
        copy: {
          ...state.copy,
          show: true,
        },
      }
    }
    case "COPY_OVERLAY_HIDE": {
      return {
        ...state,
        copy: {
          ...state.copy,
          show: false,
        },
      }
    }
    case "COLOR_MODE_SHOW": {
      return {
        ...state,
        format: {
          ...state.format,
          show: true,
        },
      }
    }
    case "COLOR_MODE_HIDE": {
      return {
        ...state,
        format: {
          ...state.format,
          show: false,
        },
      }
    }
  default:
    return state
  }
}

export default animationReducer
