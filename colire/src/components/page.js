import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../app/context'
import PalettePage from './palette-page'
import ColorPage from './color-page'
import Slider from 'rc-slider'
import Select from './select'
import 'rc-slider/assets/index.css'
import './css/page.css'
import './css/rc-slider.css'

const Page = () => {

  const { state, dispatch } = useContext(Context)
  const { paletteID, colorID } = useParams()
  const palette = state.palettes.find(palette => palette.id === paletteID)

  const handleChangeLevel = level => {
    dispatch({
      type: 'CHANGE_PALETTE_LEVEL',
      payload: { id: paletteID, level }
    })
  }

  const content = colorID
    ? <ColorPage colors={palette.colors[colorID]} />
    : <PalettePage colors={palette.colors} activeLevel={palette.activeLevel} />
  const overlayShow = state.copy.animate ? ' show' : ''
  const snackBarShow = state.format.animate ? ' show' : ''
  return (
    <>
      <header class='page-header'>
        <Link to='/' className='page-header-link'>Home</Link>
        <Slider
          defaultValue={palette.activeLevel}
          min={100}
          max={900}
          step={100}
          onChange={handleChangeLevel}
        />
        <Select />
      </header>
      <main class='page-content'>
        {content}
        <aside class={'page-snackbar' + snackBarShow}>
          Format changed to {state.format.label}
        </aside>
      </main>
      <section class={'page-overlay' + overlayShow}>
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

export default Page
