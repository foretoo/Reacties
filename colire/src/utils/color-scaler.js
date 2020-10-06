import chroma from 'chroma-js'
import seedColors from '../seed-colors'

const levels = [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]

const getRange = hexColor => {
  const end = '#fff'
  return [
    chroma(hexColor).darken(1.618).hex(),
    hexColor,
    chroma(hexColor).brighten(1.618).hex()
  ]
}

const getScale = (hexColor, numOfColors) => {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numOfColors)
}

const colorScaler = palette => {
  const newPalette = {
    ...palette,
    colors: {}
  }
  for (const level of levels) {
    newPalette.colors[level] = []
  }
  for (const color of palette.colors) {
    const scale = getScale(color.color, levels.length).reverse()
    for (const i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css()
      })
    }
  }
  return newPalette
}

export default colorScaler
