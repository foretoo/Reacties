import { addLevelProp, colorScaler } from "@utils/helpers"

const editPaletteReducer = (state, action) => {
  switch (action.type) {
  case "DELETE_COLOR": {
    const { name, target } = action.payload
    const { palette } = state.editor[target]

    const newPalette = palette.filter((c) => c.name !== name)

    return { ...state,
      editor: { ...state.editor,
        [target]: { ...state.editor[target],
          palette: newPalette,
        },
      },
    }
  }
  case "CHANGE_PALETTE_ORDER": {
    const { newOrder, target } = action.payload
    const { palette } = state.editor[target]

    const newPalette = newOrder.map((c) => palette.find((_c) => c === _c.name))
    
    return { ...state,
      editor: { ...state.editor,
        [target]: { ...state.editor[target],
          palette: newPalette,
        },
      },
    }
  }

  case "ADD_NEW_COLOR": {
    const target = action.payload
    const { [target]: { palette, color }, valid } = state.editor

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
          palette: palette.concat({
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
    const { [target]: { palette }, valid } = state.editor
    const colorIsValid = !palette.some((c) => c.color === color)

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
    const { [target]: { palette }, valid } = state.editor
    const nameIsValid = !palette.some((c) => {
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
    const { palette, name, emoji, id } = state.editor[target]

    const newPalette =
      setPalette(palette, name.replace(/\s\s+/g, " ").trim(), emoji, id)
    let palettes = []

    if (id) {
      const i = state.palettes.findIndex((palette) => palette.id === id)
      palettes = [
        ...state.palettes.slice(0, i),
        newPalette,
        ...state.palettes.slice(i + 1, state.palettes.length),
      ]
    }
    else {
      palettes = [ newPalette, ...state.palettes ]
    }

    return {
      ...state,
      palettes,
      editor: getInitEditor(state, target === "toEdit"),
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
    const paletteID = action.payload
    const { colors, name, emoji, id } = state.palettes.find((palette) => palette.id === paletteID)
    const palette = colors.map(({ name, levels }) => ({ name, color: levels[4].hex }))
    const color = { name: "", color: "#ffffff" }
    return {
      ...state,
      editor: {
        ...state.editor,
        toEdit: { color, palette, name, emoji, id },
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

const getInitEditor = (state, isPalettePage) => ({
  toEdit:   {},
  toCreate: isPalettePage ? state.editor.toCreate : {
    palette: [],
    name:    "",
    emoji:   "🖖",
    color:   { name: "", color: "#ffffff" },
  },
  hidden: false,
  valid:  { name: true, color: true, warnText: "" },
})

const setPalette = (palette, name, emoji) => colorScaler(addLevelProp({
  name,
  id:     name.toLowerCase().replace(/ /g, "-"),
  colors: palette,
  emoji,
}))