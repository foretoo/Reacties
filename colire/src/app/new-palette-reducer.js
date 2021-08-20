const newPaletteReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_NEW_COLOR': {
      const { palette, color, valid } = state.custom
      if (!color.name) {
        return {
          ...state,
          custom: {
            ...state.custom,
            valid: {
              ...valid,
              warnText: 'Enter a color name.'
            }
          }
        }
      }
      return {
        ...state,
        custom: {
          ...state.custom,
          palette: palette.concat(color),
          color: {
            ...color,
            name: ''
          },
          valid: {
            ...valid,
            color: true,
            warnText: ''
          }
        }
      }
    }
    case 'CHANGE_NEW_COLOR': {
      const { hex, rgb } = action.payload
      const { palette, valid } = state.custom
      const colorIsValid = !palette.some(c => c.hex === hex)
      const warnText =
        colorIsValid ?
          valid.warnText.replace('Color should be unique.', '').trim() :
          valid.warnText.includes('Color should be unique.') ?
            valid.warnText :
            valid.warnText.concat('Color should be unique. ')

      return {
        ...state,
        custom: {
          ...state.custom,
          color: {
            ...state.custom.color,
            hex,
            rgb
          },
          valid: {
            ...valid,
            color: colorIsValid,
            warnText
          }
        }
      }
    }
    case 'CHANGE_NEW_COLOR_NAME': {
      const nameValue = action.payload
      const { palette, valid } = state.custom
      const nameIsValid = !palette.some(c => c.name === nameValue)
      let warnText = valid.warnText.replace('Enter a color name.', '')
      warnText =
        nameIsValid ?
          warnText.replace('Name should be unique.', '').trim() :
          valid.warnText.includes('Name should be unique.') ?
            valid.warnText :
            warnText.concat('Name should be unique. ')

      return {
        ...state,
        custom: {
          ...state.custom,
          color: {
            ...state.custom.color,
            name: nameValue
          },
          valid: {
            ...valid,
            name: nameIsValid,
            warnText
          }
        }
      }

    }
    case 'TOGGLE_NEW_COLOR_FORM': {
      const { hidden } = state.custom
      return {
        ...state,
        custom: {
          ...state.custom,
          hidden: !hidden
        }
      }
    }
    default:
      return state
  }
}

export default newPaletteReducer
