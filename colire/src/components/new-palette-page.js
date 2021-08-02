import { h, Fragment } from 'preact'
import { useContext, useEffect } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { Context } from '../app/context'
import ColorBox from './color-box'
import NewPaletteForm from './new-palette-form'
import chroma from 'chroma-js'
import { ChromePicker } from 'react-color'
import './css/new-palette-page.css'

const NewPalettePage = () => {

  const { state, dispatch } = useContext(Context)
  const { palette } = state.custom
  console.log(palette);

  const paletteElement = palette.map(color => {
    const lum = chroma(color.hex).luminance()
    const lumClass = lum < 0.333 ? ' light' : ' dark'
    return (
      <div class={'color-box palette ' + lumClass} style={{ backgroundColor: color.hex }}>
        <div class='color-box-info'>
          <div class='color-box-info-name'>{color.name}</div>
        </div>
      </div>
    )
  })

  return (
    <>
      <header class='new-palette-header'>
        <svg class="burger-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
          onClick={() => setFormHidden(!formHidden)}
        >
          <path d="M18 10H2M18 4H2M18 16H2" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <Link to='/' className='page-header-link'>Home</Link>
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
