import { h } from 'preact'
import { ColorBox, withMore } from '@components'
import './css/palette-content.css'

const PaletteListContent = ({ colors, activeLevel }) => {

  const colorsList = colors.map(color => {
    return <ColorBox key={color} id={color} addClass=' palette' {...colors[color][activeLevel]} />
  })
  return colorsList
}

export default withMore(PaletteListContent)
