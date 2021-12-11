import { h } from 'preact'
import { ColorBox, withMore } from '@components'
import './css/palette-content.css'

const PaletteListContent = ({ colors, activeLevel }) => {

  const colorsList = []
  for (const color in colors) {
    colorsList.push(<ColorBox key={color} id={color} contentClass=' palette' {...colors[color][activeLevel]} />)
  }
  return colorsList
}

export default withMore(PaletteListContent)
