import { h } from 'preact'
import ColorBox from './color-box'
import withMore from './hoc-with-more'
import './css/palette-page.css'

const PalettePage = ({ colors, activeLevel }) => {

  const colorsList = []
  for (const color in colors) {
    colorsList.push(<ColorBox key={color} id={color} {...colors[color][activeLevel]} />)
  }
  return colorsList
}

export default withMore(PalettePage)
