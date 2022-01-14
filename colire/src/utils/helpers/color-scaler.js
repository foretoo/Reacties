import chroma from 'chroma-js'

const levels = [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]

const getRange = hexColor => [
  chroma(hexColor).darken(1.618).hex(),
  hexColor,
  chroma(hexColor).brighten(1.618).hex()
]

const getScale = (hexColor, numOfColors) => (
  chroma.scale(getRange(hexColor))
    .mode('lab')
    .colors(numOfColors)
)

const colorScaler = palette => {
  const newPalette = {
    ...palette,
    colors: {}
  }
  for (const color of palette.colors) {
    const name = color.name.toLowerCase().replace(/ /g, '-')
    newPalette.colors[name] = {}
    const scale = getScale(color.color, levels.length).reverse()
    for (const i in scale) {
      newPalette.colors[name][levels[i]] = {
        name: `${color.name} ${levels[i]}`,
        hex: scale[i],
        rgb: chroma(scale[i]).css()
      }
    }
  }
  return newPalette
}

export default colorScaler
