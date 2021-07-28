import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Link } from 'react-router-dom'
import ColorBox from './color-box'
import chroma from 'chroma-js'
import { ChromePicker } from 'react-color'
import './css/new-palette-page.css'

const NewPalettePage = () => {

  const [ formHidden, setFormHidden ] = useState(false)
  const [ color, setColor ] = useState({ hex: '#bbb', rgb: {}, name: 'grey' })
  const [ palette, setPalette ] = useState([color])

  let formClass = 'new-palette-form'
  if (formHidden) formClass += ' hidden'

  let lumClass = 'new-palette-add'
  if (chroma(color.hex).luminance() < 0.333) lumClass += ' light'

  const handleAddColor = () => setPalette(palette => ([ ...palette, color ]))
  const handleChangeColor = ({ hex, rgb }) => setColor(color => ({ ...color, hex, rgb }))
  const handleChangeColorName = e => setColor(color => ({ ...color, name: e.target.value }))

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
        <aside class={formClass}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <button>Clear palette</button>
            <button>Random color</button>
          </div>
          <ChromePicker color={color} onChange={handleChangeColor} disableAlpha={true}/>
          <input type='text' placeholder='color name' onChange={handleChangeColorName} />
          <button class={lumClass} style={{ backgroundColor: color.hex }} onClick={handleAddColor}>Add color</button>
        </aside>
        <section class='new-palette-content'>
          {paletteElement}
        </section>
      </main>

      <footer class='new-palette-footer'></footer>
    </>
  )
}

export default NewPalettePage
