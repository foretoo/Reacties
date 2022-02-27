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
  const colors = palette.colors.map((color) => {
    const scale = getScale(color.color, 9).reverse()
    const name = color.name
    const id = name.toLowerCase().replace(/ /g, "-")
    const levels = scale.map((hex) => ({
      hex, rgb: chroma(hex).css()
    }))
    return { id, name, levels }
  })
  return { ...palette, colors }
}

export default colorScaler
