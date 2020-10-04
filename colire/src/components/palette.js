import { h } from 'preact'
import { Link } from 'react-router-dom'
import ColorBox from './color-box'
import './css/palette.css'

const Palette = ({ paletteName, id, emoji, colors }) => {

  const colorsList = colors.map(color => {
    return <ColorBox key={color.name} {...color} />
  })

  return (
    <div class='palette'>
      <header class='palette-header'>
        <Link to='/'>Home</Link>
        {paletteName}
      </header>
      <main class='palette-colors'>
        {colorsList}
      </main>
      <footer class='palette-footer'></footer>
    </div>
  )
}

export default Palette
