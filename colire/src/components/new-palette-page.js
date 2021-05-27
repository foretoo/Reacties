import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import { ChromePicker } from 'react-color'
import './css/new-palette-page.css'

const NewPalettePage = () => {

  const [ formHidden, setFormHidden ] = useState(false)
  const [ color, setColor ] = useState({ hex: '#ccffaa' })

  let formClass = 'new-palette-form'
  if (formHidden) formClass += ' hidden'

  const lum = chroma(color.hex).luminance()
  const lumClass = lum < 0.333 ? ' light' : ''

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
          <ChromePicker color={color} onChange={color => setColor(color)} disableAlpha={true}/>
          <input type='text' placeholder='color name' />
          <button class={ 'new-palette-add' + lumClass } style={{ backgroundColor: color.hex }}>Add color</button>
        </aside>
        <section class='new-palette-content'>

        </section>
      </main>

      <footer class='new-palette-footer'></footer>
    </>
  )
}

export default NewPalettePage
