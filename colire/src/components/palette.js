import { h, Fragment } from 'preact'
import { useState, useContext } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { Context } from '../app/context'
import Slider from 'rc-slider'
import ColorBox from './color-box'
import Select from './select'
import 'rc-slider/assets/index.css'
import './css/palette.css'

const Palette = ({ paletteName, emoji, colors }) => {

  const { state } = useContext(Context)
  const [ level, setLevel ] = useState(500)

  const colorsList = colors[level].map(color => {
    return <ColorBox key={color.id} {...color} />
  })

  const handleChangeLevel = level => {
    setLevel(level)
  }

  const copiedClass = state.copied ? ' copy' : ''
  return (
    <>
      <header class='palette-header'>
        <Link to='/' className='palette-header-link'>Home</Link>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={handleChangeLevel}
        />
        <Select />
      </header>
      <main class='palette-colors'>
        {colorsList}
      </main>
      <section class={'palette-overlay' + copiedClass}>
        <h1>Copied</h1>
        <span>{state.colorCode}</span>
      </section>
      <footer class='palette-footer'>
        <span>{paletteName}</span>
        <span>{emoji}</span>
      </footer>
    </>
  )
}

export default Palette
