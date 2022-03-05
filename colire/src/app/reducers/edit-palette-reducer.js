import { addLevelProp, colorScaler } from "@utils/helpers"

const editPaletteReducer = (state, action) => {
  switch (action.type) {
  case "DELETE_COLOR": {
    const { name, target } = action.payload
    const { colors: prevColors } = state.editor[target]

    const colors = prevColors.filter((c) => c.name !== name)

    return { ...state,
      editor: { ...state.editor,
        [target]: { ...state.editor[target],
          colors,
        },
      },
    }
  }
  case "CHANGE_PALETTE_ORDER": {
    const { newOrder, target } = action.payload
    const { colors: prevColors } = state.editor[target]

    const colors = newOrder.map((c) => prevColors.find((_c) => c === _c.name))
    
    return { ...state,
      editor: { ...state.editor,
        [target]: { ...state.editor[target],
          colors,
        },
      },
    }
  }

  case "ADD_NEW_COLOR": {
    const target = action.payload
    const { [target]: { colors, color }, valid } = state.editor

    if (!color.name.trim()) {
      return { ...state,
        editor: { ...state.editor,
          valid: { ...valid,
            warnText: "Enter a color name.\n",
          },
        },
      }
    }

    return { ...state,
      editor: { ...state.editor,
        [target]: { ...state.editor[target],
          colors: colors.concat({
            name:  color.name.replace(/\s\s+/g, " ").trim(),
            color: color.color,
          }),
          color: { ...color,
            name: "",
          },
        },
        valid: { ...valid,
          color:    true,
          warnText: "",
        },
      },
    }
  }
  case "CHANGE_NEW_COLOR": {
    const { color, target } = action.payload
    const { [target]: { colors }, valid } = state.editor
    const colorIsValid = !colors.some((c) => c.color === color)

    const warnText = colorIsValid
      ? valid.warnText.replace("Color should be unique.", "")
      : valid.warnText.includes("Color should be unique.")
        ? valid.warnText
        : valid.warnText.concat("Color should be unique.\n")

    return { ...state,
      editor: { ...state.editor,
        [target]: { ...state.editor[target],
          color: { ...state.editor[target].color,
            color,
          },
        },
        valid: { ...valid,
          color: colorIsValid,
          warnText,
        },
      },
    }
  }
  case "CHANGE_NEW_COLOR_NAME": {
    const { name, target } = action.payload
    const { [target]: { colors }, valid } = state.editor
    const nameIsValid = !colors.some((c) => {
      return normSpaces(c.name.toLowerCase()) === normSpaces(name.toLowerCase())
    })

    let warnText = name
      ? valid.warnText.replace("Enter a color name.", "")
      : "Enter a color name.\n"
    warnText = nameIsValid
      ? warnText.replace("Name should be unique.", "")
      : valid.warnText.includes("Name should be unique.")
        ? valid.warnText
        : warnText.concat("Name should be unique.\n")

    return { ...state,
      editor: { ...state.editor,
        [target]: { ...state.editor[target],
          color: { ...state.editor[target].color,
            name,
          },
        },
        valid: { ...valid,
          name: nameIsValid,
          warnText,
        },
      },
    }
  }

  case "CHANGE_PALETTE_NAME": {
    const { name, target } = action.payload
    return { ...state,
      editor: { ...state.editor,
        [target]: { ...state.editor[target],
          name,
        },
      },
    }
  }
  case "CHANGE_PALETTE_EMOJI": {
    const { emoji, target } = action.payload
    return { ...state,
      editor: { ...state.editor,
        [target]: { ...state.editor[target],
          emoji,
        },
      }
    }
  }
  case "SAVE_PALETTE": {
    const target = action.payload
    return {
      ...state,
      editor: {
        toEdit: {},
        toCreate:
          target === "toEdit"
          ? state.editor.toCreate
          : {
            colors: [],
            name:    "",
            emoji:   "🖖",
            color:   { name: "", color: "#ffffff" },
          },
        hidden: false,
        valid:  { name: true, color: true, warnText: "" },
      }
    }
  }
  case "CLEAR_PALETTE": {
    const target = action.payload
    return { ...state,
      editor: { ...state.editor,
        [target]: { ...state.editor[target],
          palette: [],
        },
      },
    }
  }

  case "TOGGLE_COLOR_FORM": {
    const { hidden } = state.editor
    return { ...state,
      editor: { ...state.editor,
        hidden: !hidden,
      },
    }
  }
  case "INIT_EDIT_PALETTE": {
    const { colors: leveledColors, name, emoji, id } = action.payload
    const colors = leveledColors.map(({ name, levels }) => ({ name, color: levels[4].hex }))
    const color = { name: "", color: "#ffffff" }
    return {
      ...state,
      editor: {
        ...state.editor,
        toEdit: { color, colors, name, emoji, id },
      },
    }
  }

  default:
    return state
  }
}

export default editPaletteReducer

const normSpaces = (str) => {
  return str.replace(/\s\s+/g, " ").trim()
}