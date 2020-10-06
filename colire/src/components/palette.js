import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { Context } from '../app/context'
import ColorBox from './color-box'
import './css/palette.css'

const Palette = ({ paletteName, id, emoji, colors }) => {

  const { state } = useContext(Context)

  const colorsList = colors[500].map(color => {
    return <ColorBox key={color.id} {...color} />
  })

  const copiedClass = state.copy ? ' copy' : ''
  return (
    <>
      <header class='palette-header'>
        <Link to='/' className='palette-header-link'>Home</Link>
        <span>/</span>
        <span>{paletteName}</span>
      </header>
      <main class='palette-colors'>
        {colorsList}
      </main>
      <section class={'palette-overlay' + copiedClass}>
        <h1>Copied</h1>
        <span>{state.color}</span>
      </section>
      <footer class='palette-footer'></footer>
    </>
  )
}

export default Palette
