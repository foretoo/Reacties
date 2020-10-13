import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { useParams, useHistory } from 'react-router-dom'
import { Context } from '../app/context'
import ColorBox from './color-box'
import './css/color-page.css'

const ColorPage = ({ colors }) => {

  if (!colors) {
    const { state } = useContext(Context)
    const { paletteID, colorID } = useParams()
    const history = useHistory()
    const palette = state.palettes.find(palette => palette.id === paletteID)
    colors = palette[colorID]
  }

  const colorsList = []
  for (const level in colors) {
    colorsList.push(<ColorBox key={level} id={level} addClass=' color' {...colors[level]} />)
  }

  const handleGoBack = () => {
    history.back()
  }

  return (
    <>
      {colorsList}
      <div class='color-box back'>
        <button class='color-box-button' onClick={handleGoBack}>GO BACK</button>
      </div>
    </>
  )
}

export default ColorPage
