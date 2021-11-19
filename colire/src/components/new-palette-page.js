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
        <svg class='color-box-trash' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
          onClick={() => dispatch({ type: 'DELETE_COLOR', payload: color.color })}
        >
          <path d="M19 7H11M10 14.5C10 14.5 11 15 12.5 15H16M10 23H20L21 10C21 10 20 11 18.5 11H11.5C10 11 9 10 9 10L10 23Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
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
