import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { Context } from '../app/context'
import chroma from 'chroma-js'
import { ChromePicker } from 'react-color'
import NewPaletteForm from './new-palette-form'
import NewPaletteNameForm from './new-palette-name-form'
import './css/new-palette-page.css'

const NewPalettePage = () => {

  const { state, dispatch } = useContext(Context)
  const { palette } = state.custom


  const paletteElement = palette.map(color => {
    const lum = chroma(color.color).luminance()
    const lumClass = lum < 0.333 ? ' light' : ' dark'
    return (
      <div class={'color-box palette ' + lumClass} style={{ backgroundColor: color.color }}>
        <div class='color-box-info'>
          <div class='color-box-info-name'>{color.name}</div>
        </div>
      </div>
    )
  })


  return (
    <>
      <header class='new-palette-header'>
        <div class='nav'>
          <svg class="burger-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
            onClick={() => dispatch({ type: 'TOGGLE_NEW_COLOR_FORM' })}
          >
            <path d="M18 10H2M18 4H2M18 16H2" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <Link to='/' className='page-header-link'>Home</Link>
        </div>
        <NewPaletteNameForm />
      </header>

      <main class='new-palette-container'>
        <NewPaletteForm />
        <section class='new-palette-content'>
          {paletteElement}
        </section>
      </main>

      <footer class='new-palette-footer'></footer>
    </>
  )
}

export default NewPalettePage
