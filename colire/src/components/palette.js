import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { Context } from '../app/context'
import Slider from 'rc-slider'
import ColorBox from './color-box'
import Select from './select'
import 'rc-slider/assets/index.css'
import './css/palette.css'
import './css/rc-slider.css'

const Palette = ({ id, paletteName, emoji, colors, activeLevel }) => {

  const { state, dispatch } = useContext(Context)

  const colorsList = []
  for (const color in colors) {
    colorsList.push(<ColorBox key={color} {...colors[color][activeLevel]} />)
  }

  const handleChangeLevel = level => {
    dispatch({
      type: 'CHANGE_PALETTE_LEVEL',
      payload: { id, level }
    })
  }

  const overlayShow = state.copy.animate ? ' show' : ''
  const snackBarShow = state.format.animate ? ' show' : ''
  return (
    <>
      <header class='palette-header'>
        <Link to='/' className='palette-header-link'>Home</Link>
        <Slider
          defaultValue={activeLevel}
          min={100}
          max={900}
          step={100}
          onChange={handleChangeLevel}
        />
        <Select />
      </header>
      <main class='palette-colors'>
        {colorsList}
        <aside class={'palette-snackbar' + snackBarShow}>
          Format changed to {state.format.label}
        </aside>
      </main>
      <section class={'palette-overlay' + overlayShow}>
        <h1>Copied</h1>
        <span>{state.copy.code}</span>
      </section>
      <footer class='palette-footer'>
        <span>{paletteName}</span>
        <span>{emoji}</span>
      </footer>
    </>
  )
}

export default Palette
