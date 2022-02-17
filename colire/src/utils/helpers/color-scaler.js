import chroma from "chroma-js"

const levels = [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]

const getRange = (hexColor) => [
  chroma(hexColor).darken(1.618).hex(),
  hexColor,
  chroma(hexColor).brighten(1.618).hex(),
]

const getScale = (hexColor, numOfColors) => (
  chroma.scale(getRange(hexColor))
    .mode("lab")
    .colors(numOfColors)
)

const colorScaler = (palette) => {
  const newPalette = {
    ...palette,
    colors: {},
  }
  for (const color of palette.colors) {
    const id = color.name.toLowerCase().replace(/ /g, "-")
    newPalette.colors[id] = { name: color.name, levels: []}
    const scale = getScale(color.color, levels.length).reverse()
    for (const hex of scale) {
      newPalette.colors[id].levels.push({
        hex,
        rgb: chroma(hex).css(),
      })
    }
  }
  return newPalette
}

export default colorScaler
