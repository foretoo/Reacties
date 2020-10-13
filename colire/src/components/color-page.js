import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { useParams } from 'react-router-dom'
import { Context } from '../app/context'
import ColorBox from './color-box'
import './css/color-page.css'

const ColorPage = ({ colors }) => {

  if (!colors) {
    const { state } = useContext(Context)
    const { paletteID, colorID } = useParams()
    const palette = state.palettes.find(palette => palette.id === paletteID)
    colors = palette[colorID]
  }

  const colorsList = []
  for (const level in colors) {
    colorsList.push(<ColorBox key={level} id={level} {...colors[level]} />)
  }
  return colorsList
}

export default ColorPage
