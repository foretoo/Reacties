import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { ChromePicker } from 'react-color'
import './css/new-palette-page.css'

const NewPalettePage = () => {

  const [ formHidden, setFormHidden ] = useState(true)
  const [ color, setColor ] = useState('#cfa')

  let formClass = 'new-palette-form'
  if (formHidden) formClass += ' hidden'

  return (
    <>
      <header class='new-palette-header'>
        <svg class="burger-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
          onClick={() => setFormHidden(!formHidden)}
        >
          <path d="M18 10H2M18 4H2M18 16H2" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <Link to='/' className='page-header-link'>Home</Link>
      </header>

      <main class='new-palette-container'>
        <aside class={formClass}>
          <ChromePicker color={color} onChange={color => setColor(color)} disableAlpha={true}/>
        </aside>
        <section class='new-palette-content'>

        </section>
      </main>

      <footer class='new-palette-footer'></footer>
    </>
  )
}

export default NewPalettePage
