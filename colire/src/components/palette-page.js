import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../app/context'
import PaletteListContent from './palette-list-content'
import ColorListContent from './color-list-content'
import Slider from 'rc-slider'
import Select from './select'
import 'rc-slider/assets/index.css'
import './css/page.css'
import './css/rc-slider.css'

const PalettePage = () => {

  const { state, dispatch } = useContext(Context)
  const { paletteID, colorID } = useParams()
  const palette = state.palettes.find(palette => palette.id === paletteID)

  const handleChangeLevel = level => {
    dispatch({
      type: 'CHANGE_PALETTE_LEVEL',
      payload: { id: paletteID, level }
    })
  }

  const slider = colorID
    ? null
    : <Slider
      defaultValue={palette.activeLevel}
      min={100}
      max={900}
      step={100}
      onChange={handleChangeLevel}
    />
  const content = colorID
    ? <ColorListContent colors={palette.colors[colorID]} />
    : <PaletteListContent colors={palette.colors} activeLevel={palette.activeLevel} />
  const overlayShow = state.copy.animate ? ' show' : ''
  const snackBarShow = state.format.animate ? ' show' : ''
  return (
    <>
      <header class='page-header'>
        <Link to='/' className='page-header-link'>Home</Link>
        {slider}
        <Select />
      </header>
      <main class='page-content'>
        {content}
        <aside class={'page-snackbar' + snackBarShow}>
          Format changed to {state.format.label}
        </aside>
      </main>
      <section class={'page-overlay' + overlayShow + state.copy.class}>
        <h1>Copied</h1>
        <span>{state.copy.code}</span>
      </section>
      <footer class='page-footer'>
        <span>{palette.paletteName}</span>
        <span>{palette.emoji}</span>
      </footer>
    </>
  )
}

export default PalettePage
