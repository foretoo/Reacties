import { addLevelProp, colorScaler } from "@utils/helpers"

const editPaletteReducer = (state, action) => {
  switch (action.type) {
  case "DELETE_COLOR": {
    const name = action.payload

    let palette
    if (action.paletteID) ({ toEdit: { palette }} = state.editor)
    else ({ toCreate: { palette }} = state.editor)

    const newPalette = palette.filter((c) => c.name !== name)

    if (action.paletteID) {
      return {
        ...state,
        editor: {
          ...state.editor,
          toEdit: {
            ...state.editor.toEdit,
            palette: newPalette,
          },
        },
      }
    }
    else {
      return {
        ...state,
        editor: {
          ...state.editor,
          toCreate: {
            ...state.editor.toCreate,
            palette: newPalette,
          },
        },
      }
    }
  }
  case "ADD_NEW_COLOR": {
    let palette, color, valid
    if (action.paletteID) ({ toEdit: { palette, color }, valid } = state.editor)
    else ({ toCreate: { palette, color }, valid } = state.editor)

    if (!color.name.trim()) {
      return {
        ...state,
        editor: {
          ...state.editor,
          valid: {
            ...valid,
            warnText: "Enter a color name.\n",
          },
        },
      }
    }

    if (action.paletteID)
      return {
        ...state,
        editor: {
          ...state.editor,
          toEdit: {
            ...state.editor.toEdit,
            palette: palette.concat({
              name:  color.name.replace(/\s\s+/g, " ").trim(),
              color: color.color,
            }),
            color: {
              ...color,
              name: "",
            },
          },
          valid: {
            ...valid,
            color:    true,
            warnText: "",
          },
        },
      }
    else
      return {
        ...state,
        editor: {
          ...state.editor,
          toCreate: {
            ...state.editor.toCreate,
            palette: palette.concat({
              name:  color.name.replace(/\s\s+/g, " ").trim(),
              color: color.color,
            }),
            color: {
              ...color,
              name: "",
            },
          },
          valid: {
            ...valid,
            color:    true,
            warnText: "",
          },
        },
      }
  }
  case "CHANGE_NEW_COLOR": {
    const color = action.payload

    let palette, valid
    if (action.paletteID) ({ toEdit: { palette }, valid } = state.editor)
    else ({ toCreate: { palette }, valid } = state.editor)

    const colorIsValid = !palette.some((c) => c.color === color)
    const warnText =
        colorIsValid ?
          valid.warnText.replace("Color should be unique.", "") :
          valid.warnText.includes("Color should be unique.") ?
            valid.warnText :
            valid.warnText.concat("Color should be unique.\n")


    if (action.paletteID)
      return {
        ...state,
        editor: {
          ...state.editor,
          toEdit: {
            ...state.editor.toEdit,
            color: {
              ...state.editor.toEdit.color,
              color,
            },
          },
          valid: {
            ...valid,
            color: colorIsValid,
            warnText,
          },
        },
      }
    else
      return {
        ...state,
        editor: {
          ...state.editor,
          toCreate: {
            ...state.editor.toCreate,
            color: {
              ...state.editor.toCreate.color,
              color,
            },
          },
          valid: {
            ...valid,
            color: colorIsValid,
            warnText,
          },
        },
      }
  }
  case "CHANGE_NEW_COLOR_NAME": {
    const name = action.payload
    
    let palette, valid
    if (action.paletteID) ({ toEdit: { palette }, valid } = state.editor)
    else ({ toCreate: { palette }, valid } = state.editor)

    const nameIsValid = !palette.some((c) => {
      return normSpaces(c.name.toLowerCase()) === normSpaces(name.toLowerCase())
    })

    let warnText =
      name
      ? valid.warnText.replace("Enter a color name.", "")
      : "Enter a color name.\n"
    warnText =
      nameIsValid
      ? warnText.replace("Name should be unique.", "")
      : valid.warnText.includes("Name should be unique.")
        ? valid.warnText
        : warnText.concat("Name should be unique.\n")

    if (action.paletteID)
      return {
        ...state,
        editor: {
          ...state.editor,
          toEdit: {
            ...state.editor.toEdit,
            color: {
              ...state.editor.toEdit.color,
              name,
            },
          },
          valid: {
            ...valid,
            name: nameIsValid,
            warnText,
          },
        },
      }
    else
      return {
        ...state,
        editor: {
          ...state.editor,
          toCreate: {
            ...state.editor.toCreate,
            color: {
              ...state.editor.toCreate.color,
              name,
            },
          },
          valid: {
            ...valid,
            name: nameIsValid,
            warnText,
          },
        },
      }
  }
  case "TOGGLE_NEW_COLOR_FORM": {
    const { hidden } = state.editor
    return {
      ...state,
      editor: {
        ...state.editor,
        hidden: !hidden,
      },
    }
  }
  case "CHANGE_PALETTE_ORDER": {
    const newOrder = action.payload
    
    let palette
    if (action.paletteID) ({ toEdit: { palette }} = state.editor)
    else ({ toCreate: { palette }} = state.editor)

    const newPalette = newOrder.map((c) => palette.find((_c) => c === _c.name))
    if (action.paletteID)
      return {
        ...state,
        editor: {
          ...state.editor,
          toEdit: {
            ...state.editor.toEdit,
            palette: newPalette,
          },
        },
      }
    else
      return {
        ...state,
        editor: {
          ...state.editor,
          toCreate: {
            ...state.editor.toCreate,
            palette: newPalette,
          },
        },
      }
  }
  case "CHANGE_PALETTE_NAME": {
    const name = action.payload
    if (action.paletteID)
      return {
        ...state,
        editor: {
          ...state.editor,
          toEdit: {
            ...state.editor.toEdit,
            name,
          },
        },
      }
    else
      return {
        ...state,
        editor: {
          ...state.editor,
          toCreate: {
            ...state.editor.toCreate,
            name,
          },
        },
      }
  }
  case "CHANGE_PALETTE_EMOJI": {
    const emoji = action.payload
    if (action.paletteID)
      return {
        ...state,
        editor: {
          ...state.editor,
          toEdit: {
            ...state.editor.toEdit,
            emoji,
          },
        },
      }
    else
      return {
        ...state,
        editor: {
          ...state.editor,
          toCreate: {
            ...state.editor.toCreate,
            emoji,
          },
        },
      }
  }
  case "SAVE_PALETTE": {
    let palette, name, emoji, id
    if (action.paletteID) ({ palette, name, emoji, id } = state.editor.toEdit)
    else ({ palette, name, emoji } = state.editor.toCreate)

    name = name.replace(/\s\s+/g, " ").trim()
    const newPalette = setPalette(palette, name, emoji, id)
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
      palettes = state.palettes.concat(newPalette)
    }
    return {
      ...state,
      palettes,
      editor: getInitEditor(state, action.paletteID),
    }
  }
  case "CLEAR_PALETTE": {
    if (action.paletteID)
      return {
        ...state,
        editor: {
          ...state.editor,
          toEdit: {
            ...state.editor.toEdit,
            palette: [],
          },
        },
      }
    else
      return {
        ...state,
        editor: {
          ...state.editor,
          toCreate: {
            ...state.editor.toCreate,
            palette: [],
          },
        },
      }
  }

  case "INIT_EDIT_PALETTE": {
    const { colors, name, emoji, id } =
      state.palettes.find((palette) => (
        palette.id === action.paletteID
      ))
    const palette = []
    for (let id in colors) {
      const { name } = colors[id]
      const color = colors[id].levels[4].hex
      palette.push({ name, color })
    }
    return {
      ...state,
      editor: {
        ...state.editor,
        toEdit: {
          color: { name: "", color: "#ffffff" },
          palette,
          name,
          emoji,
          id,
        },
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

const getInitEditor = (state, isPaletteID) => ({
  toEdit:   {},
  toCreate: isPaletteID ? state.editor.toCreate : {
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