import { addLevelProp, colorScaler } from "@utils/helpers"

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

    case "SAVE_PALETTE": {
      const { colors, name, emoji, id } = action.payload
      const palette = setPalette(colors, name, emoji)

      let palettes = []
      if (id) {
        const i = state.palettes.findIndex((palette) => palette.id === id)
        palettes = [
          ...state.palettes.slice(0, i),
          palette,
          ...state.palettes.slice(i + 1, state.palettes.length),
        ]
      }
      else {
        palettes = [ palette, ...state.palettes ]
      }
  
      return { ...state, palettes }
    }
    
    default:
      return state
  }
}

export default reducer

const setPalette = (colors, name, emoji) =>
  colorScaler(addLevelProp({
    id: name
          .replace(/\s\s+/g, " ")
          .trim()
          .toLowerCase()
          .replace(/ /g, "-"),
    name,
    colors,
    emoji,
}))