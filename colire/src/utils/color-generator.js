import chroma from 'chroma-js'
import seedColors from '../app/seedColors'

const levels = [ 0, 100, 200, 300, 400, 500, 600, 700, 800, 900 ]

const getRange = hexColor => {
  const end = '#fff'
  return [
    chroma(hexColor).darken(1.4).hex(),
    hexColor,
    end
  ]
}

const getScale = (hexColor, numOfColors) => {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numOfColors)
}

const colorGenerator = palette => {
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

export default colorGenerator
