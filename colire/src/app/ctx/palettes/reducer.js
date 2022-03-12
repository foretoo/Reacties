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

    case "EXPORT_CONTENT_CHANGE": {
      const data = action.payload
      const obj  = {
        css:  { rgb: {}, hex: {} },
        json: { rgb: {}, hex: {} },
      }
      if ("colors" in data) {
        const level = data.activeLevel / 100 - 1
        data.colors.forEach(item => {
          const color = item.levels[level]
          obj.css.hex[`--${item.id}`] = color.hex
          obj.css.rgb[`--${item.id}`] = color.rgb
          obj.json.hex[item.id] = color.hex
          obj.json.rgb[item.id] = color.rgb
        })
      }
      else if ("levels" in data) {
        const id = data.id
        data.levels.forEach((item, i) => {
          const level = (i + 1) * 100
          obj.css.hex[`--${id}-${level}`] = item.hex
          obj.css.rgb[`--${id}-${level}`] = item.rgb
          obj.json.hex[`${id}-${level}`] = item.hex
          obj.json.rgb[`${id}-${level}`] = item.rgb
        })
      }
      let css = {}, json = {}
      for (let format in obj.css)  css[format]  = stringifyCSS(obj.css[format])
      for (let format in obj.json) json[format] = stringifyJSON(obj.json[format])

      return { ...state, toExport: { ...state.toExport, css, json }}
    }

    case "EXPORT_CONTENT_TOGGLE": {
      return { ...state, 
        toExport: { ...state.toExport, 
          display: !state.toExport.display 
      }}
    }

    case "EXPORT_CONTENT_HIDE": {
      return { ...state, 
        toExport: { ...state.toExport, 
          display: false 
      }}
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

const stringifyCSS = (obj) => (
  JSON.stringify(obj)
    .replace(/:/g, ": ")
    .replace(/[{}"]/g, "")
    .replace(/,-/g, ";\n-") + ";"
)
const stringifyJSON = (obj) => (
  JSON.stringify(obj)
    .replace(/:/g, ": ")
    .replace(/{/g, "{\n\t")
    .replace(/}/g, "\n}")
    .replace(/",/g, "\",\n\t")
)